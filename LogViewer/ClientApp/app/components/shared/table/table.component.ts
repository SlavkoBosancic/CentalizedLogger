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
        { columnName: 'id', columnTitle: 'Log ID', width: 200 },
        { columnName: 'createDate', columnTitle: 'Create Date', width: 160 },
        { columnName: 'logLevel', columnTitle: 'Log Level', width: 120, centered: true },
        { columnName: 'logSource', columnTitle: 'Log Source', width: 180 },
        { columnName: 'description', columnTitle: 'Description' }
    ];

    constructor() { }

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

        if(logLevel == LogLevel.ERROR){
            result = "danger";
        } else if (logLevel == LogLevel.WARNING){
            result = "warning";
        }

        return result;
    }
}