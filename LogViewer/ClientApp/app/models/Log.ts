import { LogLevel } from './LogLevel';

export class Log {
    constructor() { }

    id: string = ""
    createDate: Date = new Date()
    logSource: string = ""
    logLevel: LogLevel = LogLevel.INFO
    description: string = ""
}