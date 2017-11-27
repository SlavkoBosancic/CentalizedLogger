export class BaseSearchRequest{
    constructor() { }

    applyValues(baseSearchRequestObj: BaseSearchRequest){
        this.take = baseSearchRequestObj.take;
        this.skip = baseSearchRequestObj.skip;
    }

     // Pagination
     take: number = 0
     skip: number = 0
}