import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

// Components
import { Log } from '../../models/Log';
import { BaseSearchRequest } from '../../models/BaseSearchRequest';
import { SearchResponse } from '../../models/SearchResponse';

// Services
import { LogDataService } from '../../services/log.data.service';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
    constructor(private logDataService: LogDataService,
                private activeRoute: ActivatedRoute,
                private router: Router) { }

    private searchResponse = new SearchResponse<Log>();
    private pageSize = 10;          // Hard coded value for number of rows per page

    ngOnInit(): void {

        // create a subsription on route parameters change
        this.activeRoute
            .params
            .subscribe((params: Params) => {
                // extract search request params (take, skip...)
                let baseSearchRequest = this.extractBaseSearchRequest(params);

                console.log(baseSearchRequest);

                // retrieve rows using data service
                this.logDataService
                    .fetchRecentLogs(baseSearchRequest)
                    .then(result => {
                        
                        console.log(result);
                        this.searchResponse.applyValues(result);
                    })
            });
    }

    extractBaseSearchRequest(params: Params): BaseSearchRequest {
        let result = new BaseSearchRequest();

        // extract 'page' route parameter and safeguard against zero, negative and NaN
        let pageParam = params['page'] || 1;
        let pageNumber = Number(pageParam) || 1;

        result.take = this.pageSize;
        result.skip = pageNumber < 1 ? 0 : (pageNumber - 1) * this.pageSize;
        
        return result;
    }

    // event handler for the page-select component - (go to page) event 
    goToPage(pageNumber: number): void {
        this.router.navigate(['/home', pageNumber], { relativeTo: this.activeRoute })
    }
}
