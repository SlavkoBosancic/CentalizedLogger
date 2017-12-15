import { Component, Input, Output, EventEmitter } from '@angular/core'

@Component({
    selector: 'page-size-component',
    templateUrl: './page-size.component.html',
    styleUrls: ['./page-size.component.css']
})

export class PageSizeComponent {
    @Input() take: number
    @Output() newPageSize: EventEmitter<number> = new EventEmitter<number>()

    private pageSizeOptions: number[] = new Array<number>(5, 15, 30);

    setPageSize(value: string): void {
        let numValue = +value;
        this.newPageSize.emit(numValue);
    }
}