export class SearchRequest{
    constructor() { }

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