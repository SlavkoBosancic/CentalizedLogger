import { Component, Input, Output, EventEmitter } from '@angular/core';

// Components
import { Log } from '../../../models/Log';
import { LogLevel } from '../../../models/LogLevel';

@Component({
    selector: 'table-component',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.css']
})

export class TableComponent {
    @Input() rows: Log[]
    @Input() sortedBy: string
    @Input() descending: boolean

    @Output() newSortColumn: EventEmitter<string> = new EventEmitter<string>();

    private columns: any[] = [
        { columnName: 'id', columnTitle: 'Log ID' },
        { columnName: 'createDate', columnTitle: 'Create Date' },
        { columnName: 'logLevel', columnTitle: 'Log Level', centered: true },
        { columnName: 'logSource', columnTitle: 'Log Source' },
        { columnName: 'description', columnTitle: 'Description' }
    ];

    constructor() { }

    // function to adjust the display of certain values within the Log object (e.g. Create Date)
    displayValue(columnName:string, columnValue: any): string {
        let result = "";

        if(columnName == 'createDate'){
            let createDate: Date = (<Date>columnValue);
            result = createDate.toLocaleDateString() + " " + createDate.toLocaleTimeString();
        }else{
            result = columnValue;
        }

        return result;
    }

    setSort(columnName: string): void {
        this.newSortColumn.emit(columnName);
    }

    isSortedBy(columnName: string): string {
        //console.log("evaluating isSortBy classes: " + columnName);
        let result = "";

        if(columnName.length){
            if(columnName === this.sortedBy){
                result = this.descending ? "descending" : "ascending";
            }
        }

        return result;
    }

    logLevelBg(logLevel: LogLevel): string {
        var result = "";

        switch (logLevel) {
            case LogLevel.ERROR:
                result = "danger";
                break;
            case LogLevel.WARNING:
                result = "warning";
                break;
            default:
                break;
        }

        return result;
    }
}