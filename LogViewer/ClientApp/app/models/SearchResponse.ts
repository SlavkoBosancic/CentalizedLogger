import { SearchRequest } from './SearchRequest';

export class SearchResponse<T> extends SearchRequest {
    constructor() { super(); }

    total: number
    result: T[]
}