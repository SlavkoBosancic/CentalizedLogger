import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

// Components
import { Log } from '../../models/Log';
import { SearchRequest } from '../../models/SearchRequest';
import { SearchResponse } from '../../models/SearchResponse';

// Services
import { LogDataService } from '../../services/log.data.service';

@Component({
    selector: 'search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {

    private searchResponse = new SearchResponse<Log>();
    private pageSizeOptions = new Array<number>(5, 15, 30);

    constructor(private logDataService: LogDataService,
                private activeRoute: ActivatedRoute,
                private router: Router) {

        // create default values for the intial search query, sor by Creation Date sorted in descending order
        this.searchResponse.take = this.pageSizeOptions[0];
        this.searchResponse.sortBy = "createDate";
        this.searchResponse.descending = true;
    }


    ngOnInit(): void {

        // create a subsription on route parameters change
        this.activeRoute
            .queryParamMap        // in the search&filter page we use queryParams-Map property
            .subscribe((params: ParamMap) => {
                // extract search request params (take, skip...)
                let searchRequest = this.extractBaseSearchRequest(params);

                console.log(searchRequest);

                // retrieve rows using data service
                this.logDataService
                    .fetchLogs(searchRequest)
                    .then(result => {
                        
                        console.log(result);
                        this.searchResponse.applyValues(result);
                    })
            });
    }

    extractBaseSearchRequest(params: ParamMap): SearchRequest {
        debugger;
        let result = new SearchRequest();

        // extract "take" query parameter, or use current value
        let takeNumber = this.searchResponse.take;
        if(params.has('take')){
            // see if query param is NaN
            takeNumber = Number(params.get('take')) || takeNumber;
        }

        // see if given 'take' param is in the list of page-size-options, if not find closest
        result.take = this.pageSizeOptions.find((value, index, array)  => takeNumber <= value ) ||
                      this.pageSizeOptions[this.pageSizeOptions.length - 1];

        // -----------------------------------------------------------------

        // extract "skip" query parameter, or use current skip value
        let skipNumber = this.searchResponse.skip;
        if(params.has('skip')){
            // see if query param is NaN
            skipNumber = Number(params.get('skip')) || skipNumber;
        }

        // check if positive and applicable to the current page size ('take' param)
        result.skip = (skipNumber >= 0) && (skipNumber % result.take == 0) ? skipNumber : 0; 

        // -----------------------------------------------------------------

        // extract "sortBy" and "descending" query parameters, or use current values
        let descProperty = this.searchResponse.descending;
        let sortProperty = this.searchResponse.sortBy;

        if(params.has('sortBy') && params.has('descending')){
            let sortParam = params.get('sortBy') || "";
            // check if sortBy property exsists on the Log object
            if(Object.getOwnPropertyNames(new Log()).indexOf(sortParam)){
                sortProperty = sortParam;
                descProperty = (params.get('descending') || "").toLowerCase() === "true";
            }
        }

        result.sortBy = sortProperty;
        result.descending = descProperty;

        // -----------------------------------------------------------------
        
        return result;
    }

    // event handler for the page-select component - (go to page) event 
    goToPage(pageNumber: number): void {
        // create new search request object and apply current values (copy operation)
        let searchRequest = new SearchRequest()
        searchRequest.applyValues(this.searchResponse as SearchRequest);

        // Calculate the skip number
        searchRequest.skip = (pageNumber - 1) * searchRequest.take;

        // navigate to route with new query params
        this.router.navigate(['/search'], { relativeTo: this.activeRoute, queryParams: searchRequest })
    }

    // event handler for page-size component
    setPageSize(pageSize: number): void {
        let searchRequest = new SearchRequest()
        searchRequest.applyValues(this.searchResponse as SearchRequest);

        // Calculate the take number
        searchRequest.take = pageSize;

        // navigate to route with new query params
        this.router.navigate(['/search'], { relativeTo: this.activeRoute, queryParams: searchRequest })
    }

    setSortColumn(columnName: string): void {
        let searchRequest = new SearchRequest()
        searchRequest.applyValues(this.searchResponse as SearchRequest);

        // new sort column, if same toggle descending flag
        if(columnName == searchRequest.sortBy){
            searchRequest.descending = !searchRequest.descending;
        }else{
            searchRequest.sortBy = columnName;
            searchRequest.descending = false;
        }
        
        // navigate to route with new query params
        this.router.navigate(['/search'], { relativeTo: this.activeRoute, queryParams: searchRequest })
    }
}