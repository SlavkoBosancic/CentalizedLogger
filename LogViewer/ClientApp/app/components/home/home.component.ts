import { Component, OnInit } from '@angular/core';

// Components
import { SearchRequest } from '../../models/SearchRequest';

// Services
import { LogDataService } from '../../services/log.data.service';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
    constructor(private logDataService: LogDataService) { }

    ngOnInit(): void { 
        let t = this.logDataService.fetchLogs(new SearchRequest());
        t.then(result => { 
            console.log(result);
        })
    }
}
