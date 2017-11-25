import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';

// Components
import { Log } from '../models/Log';
import { SearchRequest } from '../models/SearchRequest';
import { SearchResponse } from '../models/SearchResponse';

// Services
import { LogMockService } from './log.mock.service';

@Injectable()



export class LogDataService {
    constructor(private logMockService: LogMockService) { }

    fetchLogs(searchRequest: SearchRequest): Promise<SearchResponse<Log>> {
        return this.logMockService.getLogs(searchRequest);
    }
}