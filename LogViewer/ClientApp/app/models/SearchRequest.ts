import { BaseSearchRequest } from './BaseSearchRequest';

export class SearchRequest extends BaseSearchRequest {
    constructor() { super(); }

    applyValues(searchRequestObj: SearchRequest){
        super.applyValues(<BaseSearchRequest>searchRequestObj);

        this.sortBy = searchRequestObj.sortBy;
        this.descending = searchRequestObj.descending;

        this.descriptionFilter = searchRequestObj.descriptionFilter;
        this.logSourceFilter = searchRequestObj.logSourceFilter;
        this.logLevelFilter = searchRequestObj.logLevelFilter;
    }

    // Sorting
    sortBy: string = ""
    descending: boolean = false

    // Filtering
    descriptionFilter: string = ""
    logSourceFilter: string = ""
    logLevelFilter: string = ""
}