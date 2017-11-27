import { SearchRequest } from './SearchRequest';

export class SearchResponse<T> extends SearchRequest {
    constructor() { super(); }

    applyValues(searchResponseObj: SearchResponse<T>){
        super.applyValues(<SearchRequest>searchResponseObj);

        this.total = searchResponseObj.total;
        this.result = searchResponseObj.result;
    }

    total: number = 0
    result: T[] = new Array<T>()
}