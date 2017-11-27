import { Component, OnInit } from '@angular/core';

// Components
import { Log } from '../../models/Log';
import { SearchRequest } from '../../models/SearchRequest';
import { SearchResponse } from '../../models/SearchResponse';

// Services
import { LogDataService } from '../../services/log.data.service';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
    constructor(private logDataService: LogDataService) { }

    private searchResponse = new SearchResponse<Log>();

    ngOnInit(): void {

        //let baseSearchRequest = this.extractBaseSearchRequest();

        this.logDataService
            .fetchLogs(new SearchRequest())
            .then(result => {
                
                console.log(result);
                result.sortBy = "createDate";
                result.take = 4;
                result.skip = 0;

                this.searchResponse.applyValues(result);
            })
    }

    // extractBaseSearchRequest(): SearchRequest {

    // }

    setSortColumn(columnName: string): void {
        console.log("set sort by: " + columnName);
    }

    // event handler for the pager component - (go to page) event 
    goToPage(pageNumber: number): void {
        console.log("new page number: " + pageNumber);
    }
}
