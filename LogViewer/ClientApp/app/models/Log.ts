import { LogLevel } from './LogLevel';

export class Log {
    constructor() { }

    id: string
    createDate: Date
    logSource: string
    logLevel: LogLevel
    description: string
}