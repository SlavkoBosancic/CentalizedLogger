import { Injectable } from '@angular/core';

// Components
import { Log } from '../models/Log';
import { LogLevel } from '../models/LogLevel';
import { CommonLogSources } from '../models/CommonLogSources';
import { SearchRequest } from '../models/SearchRequest';
import { SearchResponse } from '../models/SearchResponse';

let logs: Log[] = [
    { id: "LKS9-ASDA-YOTL-6HSA", createDate: new Date(Date.now()), logSource: CommonLogSources.AuthenticationService, logLevel: LogLevel.ERROR, description: "some text for testing." },
    { id: "LKS9-AS7A-DD5S-6HVB", createDate: new Date(Date.now() + 3000), logSource: CommonLogSources.DatabaseServer, logLevel: LogLevel.INFO, description: "some TESTING text for testing1." },
    { id: "DZG6-AS0A-Y9TL-6HYL", createDate: new Date(Date.now() + 5000), logSource: CommonLogSources.PLCController, logLevel: LogLevel.WARNING, description: "some text333 for unique testing." },
    { id: "G78L-AS7A-D4FS-7HY8", createDate: new Date(Date.now() + 7000), logSource: CommonLogSources.AuthenticationService, logLevel: LogLevel.ERROR, description: "some TESTING text111 for testing1." },
    { id: "ZBGF-ASDA-YOTL-6HSA", createDate: new Date(Date.now() + 9000), logSource: CommonLogSources.AuthenticationService, logLevel: LogLevel.ERROR, description: "some text for goofy testing." },
    { id: "L329-AS7A-DD5S-6HVB", createDate: new Date(Date.now() + 11000), logSource: CommonLogSources.DatabaseServer, logLevel: LogLevel.INFO, description: "some TESTING text for testing1." },
    { id: "LL9K-AS0A-Y9TL-6HYL", createDate: new Date(Date.now() + 13000), logSource: CommonLogSources.PLCController, logLevel: LogLevel.WARNING, description: "some text333 for lorem testing." },
    { id: "NN0M-AS7A-D4FS-7HY8", createDate: new Date(Date.now() + 15000), logSource: CommonLogSources.AuthenticationService, logLevel: LogLevel.ERROR, description: "some TESTING text111 ipsum for testing1." },
    { id: "LKS9-ARDA-YOTL-6HSA", createDate: new Date(Date.now() + 17000), logSource: CommonLogSources.AuthenticationService, logLevel: LogLevel.ERROR, description: "some text for testing." },
    { id: "LBS9-AS7A-DD5S-6HVB", createDate: new Date(Date.now() + 19000), logSource: CommonLogSources.DatabaseServer, logLevel: LogLevel.INFO, description: "some TESTING text for testing1." },
    { id: "DZG6-AS0A-Y9TW-6HYL", createDate: new Date(Date.now() + 21000), logSource: CommonLogSources.PLCController, logLevel: LogLevel.WARNING, description: "some text333 for unique testing." },
    { id: "G788-AS7A-D4FS-7HY8", createDate: new Date(Date.now() + 23000), logSource: CommonLogSources.AuthenticationService, logLevel: LogLevel.ERROR, description: "some TESTING text111 for testing1." },
    { id: "ZBGF-AGGA-YOTL-6HSA", createDate: new Date(Date.now() + 25000), logSource: CommonLogSources.AuthenticationService, logLevel: LogLevel.ERROR, description: "some text for goofy testing." },
    { id: "L329-AS7A-2RQS-6HVB", createDate: new Date(Date.now() + 27000), logSource: CommonLogSources.DatabaseServer, logLevel: LogLevel.INFO, description: "some TESTING text for testing1." },
    { id: "LL9K-AS0A-Y9TL-123L", createDate: new Date(Date.now() + 29000), logSource: CommonLogSources.PLCController, logLevel: LogLevel.WARNING, description: "some text333 for lorem testing." },
    { id: "9877-AS7A-D4FS-7HY8", createDate: new Date(Date.now() + 31000), logSource: CommonLogSources.AuthenticationService, logLevel: LogLevel.ERROR, description: "some TESTING text111 ipsum for testing1." }
];

@Injectable()

export class LogMockService{
    constructor() { }

    getLogs(searchQuery: SearchRequest): Promise<SearchResponse<Log>> {
        let mockQuery = new SearchResponse<Log>();

        mockQuery.result = logs;
        mockQuery.total = logs.length;

        mockQuery.sortBy = searchQuery.sortBy;
        mockQuery.descending = searchQuery.descending;

        mockQuery.skip = searchQuery.skip;   
        mockQuery.take = searchQuery.take;

        mockQuery.descriptionFilter = searchQuery.descriptionFilter;
        mockQuery.logSourceFilter = searchQuery.logSourceFilter;
        mockQuery.logLevelFilter = searchQuery.logLevelFilter;

        return Promise.resolve(mockQuery);
    }
}