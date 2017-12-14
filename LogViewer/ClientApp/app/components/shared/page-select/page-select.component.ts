import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'page-select-component',
    templateUrl: './page-select.component.html',
    styleUrls: ['./page-select.component.css']
})

export class PageSelectComponent {
    @Input() take: number
    @Input() skip: number
    @Input() total: number

    @Output() goToPage: EventEmitter<number> = new EventEmitter<number>();


    currentPage(): number {
        return Math.floor(this.skip / this.take) + 1;
    }

    totalPages(): number {
        let totalPages = Math.ceil(this.total / this.take);
        // for the case that total number or records is 0
        return totalPages > 0 ? totalPages : 1;
    }

    goToPrevious(): void {
        return this.selectPage(this.currentPage() - 1);
    }

    goToNext(): void {
        return this.selectPage(this.currentPage() + 1);
    }

    selectPage(pageNumber: number): void {
        let newPageNumber = pageNumber;

        if(newPageNumber < 1){
            newPageNumber = 1;
        } else if(newPageNumber > this.totalPages()){
            newPageNumber = this.totalPages();
        }

        this.goToPage.emit(newPageNumber);
    }
}