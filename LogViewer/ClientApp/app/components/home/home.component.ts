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
        this.logDataService
            .fetchLogs(new SearchRequest())
            .then(result => {
                
                console.log(result);
                result.sortBy = "createDate";

                this.searchResponse.applyValues(result);
            })
    }

    setSortColumn(columnName: string): void {
        console.log("set sort by: " + columnName);
    }
}
