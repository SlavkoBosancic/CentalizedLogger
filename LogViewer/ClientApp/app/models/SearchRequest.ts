export class SearchRequest{
    constructor() { }

    applyValues(searchRequestObj: SearchRequest){
        this.sortBy = searchRequestObj.sortBy;
        this.descending = searchRequestObj.descending;

        this.take = searchRequestObj.take;
        this.skip = searchRequestObj.skip;

        this.descriptionFilter = searchRequestObj.descriptionFilter;
        this.logSourceFilter = searchRequestObj.logSourceFilter;
        this.logLevelFilter = searchRequestObj.logLevelFilter;
    }

    // Sorting
    sortBy: string = ""
    descending: boolean = false

    // Pagination
    take: number = 0
    skip: number = 0

    // Filtering
    descriptionFilter: string = ""
    logSourceFilter: string = ""
    logLevelFilter: string = ""
}