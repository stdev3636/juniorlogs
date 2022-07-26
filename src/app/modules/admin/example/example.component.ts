import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

interface Transaction {
    paynme: string,
    childdata: string,
    weeks3: string,
    weeks2: string,
    weeks1: string,
    current: string,
    amount: string,
    payment: string,
    creditNote: string,
    pendingAmount: number
}

@Component({
    selector: 'example',
    templateUrl: './example.component.html',
    encapsulation: ViewEncapsulation.None
})

export class ExampleComponent implements AfterViewInit {
    @Input() Items: string[] = ['Select All', 'Unselect All'];
    @Input() SelectedItem: string = 'Select All';
    @Output() OnChange: EventEmitter<string> = new EventEmitter<string>();
    checkshow: boolean = false;
    moreOptions: boolean = true;
    moreinfo: boolean = true;
    showclose: boolean = true;
    hideicon: boolean = false;

    transactions: Transaction[] = [
        {
            paynme: 'John Doe', childdata: 'Berlin', weeks3: '4098.25', weeks2: '4098.25', weeks1: '4098.25',
            current: '4098.25', amount: '4098.25', payment: '5361.84', creditNote: '5361.84', pendingAmount: 2061.84
        },
        {
            paynme: 'Thomas Doe', childdata: 'Mark', weeks3: '2098.25', weeks2: '4098.25', weeks1: '4098.25',
            current: '4098.25', amount: '1098.25', payment: '6361.84', creditNote: '5761.84', pendingAmount: 7201.84
        },
        {
            paynme: 'Rochaar', childdata: 'Adam', weeks3: '2098.25', weeks2: '4098.25', weeks1: '4098.25',
            current: '4098.25', amount: '1098.25', payment: '6361.84', creditNote: '5761.84', pendingAmount: 6061.84
        },
        {
            paynme: 'Mark Duo', childdata: 'Damen', weeks3: '2098.25', weeks2: '4098.25', weeks1: '4098.25',
            current: '4098.25', amount: '1098.25', payment: '6362.84', creditNote: '5761.84', pendingAmount: 7061.84
        },
        {
            paynme: 'Eric Denmark', childdata: 'Adam', weeks3: '2098.25', weeks2: '4098.25', weeks1: '4098.25',
            current: '4098.25', amount: '1098.25', payment: '6361.84', creditNote: '5761.84', pendingAmount: 5061.84
        },
        {
            paynme: 'Reazil Montrel', childdata: 'Lilly', weeks3: '2088.25', weeks2: '4098.25', weeks1: '4098.25',
            current: '4098.25', amount: '1098.25', payment: '6361.84', creditNote: '5761.84', pendingAmount: 3861.84
        },
        {
            paynme: 'Peter Lewis', childdata: 'Thomas', weeks3: '2078.25', weeks2: '4098.25', weeks1: '4098.25',
            current: '4098.25', amount: '1098.25', payment: '6361.84', creditNote: '5761.84', pendingAmount: 7061.84
        },
        {
            paynme: 'Maron Dremz', childdata: 'Brian', weeks3: '2075.25', weeks2: '4098.25', weeks1: '4098.25',
            current: '4098.25', amount: '1098.25', payment: '5781.84', creditNote: '5761.84', pendingAmount: 5071.84
        },
        {
            paynme: 'John Doe', childdata: 'Berlin', weeks3: '4098.25', weeks2: '4098.25', weeks1: '4098.25',
            current: '4098.25', amount: '4098.25', payment: '5361.84', creditNote: '5361.84', pendingAmount: 2061.84
        },
        {
            paynme: 'Thomas Doe', childdata: 'Mark', weeks3: '2098.25', weeks2: '4098.25', weeks1: '4098.25',
            current: '4098.25', amount: '1098.25', payment: '6361.84', creditNote: '5761.84', pendingAmount: 7201.84
        },
        {
            paynme: 'Rochaar', childdata: 'Adam', weeks3: '2098.25', weeks2: '4098.25', weeks1: '4098.25',
            current: '4098.25', amount: '1098.25', payment: '6361.84', creditNote: '5761.84', pendingAmount: 6061.84
        },
        {
            paynme: 'Mark Duo', childdata: 'Damen', weeks3: '2098.25', weeks2: '4098.25', weeks1: '4098.25',
            current: '4098.25', amount: '1098.25', payment: '6362.84', creditNote: '5761.84', pendingAmount: 7061.84
        },
        {
            paynme: 'Eric Denmark', childdata: 'Adam', weeks3: '2098.25', weeks2: '4098.25', weeks1: '4098.25',
            current: '4098.25', amount: '1098.25', payment: '6361.84', creditNote: '5761.84', pendingAmount: 5061.84
        },
        {
            paynme: 'Reazil Montrel', childdata: 'Lilly', weeks3: '2088.25', weeks2: '4098.25', weeks1: '4098.25',
            current: '4098.25', amount: '1098.25', payment: '6361.84', creditNote: '5761.84', pendingAmount: 3861.84
        },
        {
            paynme: 'Peter Lewis', childdata: 'Thomas', weeks3: '2078.25', weeks2: '4098.25', weeks1: '4098.25',
            current: '4098.25', amount: '1098.25', payment: '6361.84', creditNote: '5761.84', pendingAmount: 7061.84
        },
        {
            paynme: 'Maron Dremz', childdata: 'Brian', weeks3: '2075.25', weeks2: '4098.25', weeks1: '4098.25',
            current: '4098.25', amount: '1098.25', payment: '5781.84', creditNote: '5761.84', pendingAmount: 5071.84
        },
        {
            paynme: 'John Doe', childdata: 'Berlin', weeks3: '4098.25', weeks2: '4098.25', weeks1: '4098.25',
            current: '4098.25', amount: '4098.25', payment: '5361.84', creditNote: '5361.84', pendingAmount: 2061.84
        },
        {
            paynme: 'Thomas Doe', childdata: 'Mark', weeks3: '2098.25', weeks2: '4098.25', weeks1: '4098.25',
            current: '4098.25', amount: '1098.25', payment: '6361.84', creditNote: '5761.84', pendingAmount: 7201.84
        },
        {
            paynme: 'Rochaar', childdata: 'Adam', weeks3: '2098.25', weeks2: '4098.25', weeks1: '4098.25',
            current: '4098.25', amount: '1098.25', payment: '6361.84', creditNote: '5761.84', pendingAmount: 6061.84
        },
        {
            paynme: 'Mark Duo', childdata: 'Damen', weeks3: '2098.25', weeks2: '4098.25', weeks1: '4098.25',
            current: '4098.25', amount: '1098.25', payment: '6362.84', creditNote: '5761.84', pendingAmount: 7061.84
        },
        {
            paynme: 'Eric Denmark', childdata: 'Adam', weeks3: '2098.25', weeks2: '4098.25', weeks1: '4098.25',
            current: '4098.25', amount: '1098.25', payment: '6361.84', creditNote: '5761.84', pendingAmount: 5061.84
        },
        {
            paynme: 'Reazil Montrel', childdata: 'Lilly', weeks3: '2088.25', weeks2: '4098.25', weeks1: '4098.25',
            current: '4098.25', amount: '1098.25', payment: '6361.84', creditNote: '5761.84', pendingAmount: 3861.84
        },
        {
            paynme: 'Peter Lewis', childdata: 'Thomas', weeks3: '2078.25', weeks2: '4098.25', weeks1: '4098.25',
            current: '4098.25', amount: '1098.25', payment: '6361.84', creditNote: '5761.84', pendingAmount: 7061.84
        },
        {
            paynme: 'Maron Dremz', childdata: 'Brian', weeks3: '2075.25', weeks2: '4098.25', weeks1: '4098.25',
            current: '4098.25', amount: '1098.25', payment: '5781.84', creditNote: '5761.84', pendingAmount: 5071.84
        },
        {
            paynme: 'John Doe', childdata: 'Berlin', weeks3: '4098.25', weeks2: '4098.25', weeks1: '4098.25',
            current: '4098.25', amount: '4098.25', payment: '5361.84', creditNote: '5361.84', pendingAmount: 2061.84
        },
        {
            paynme: 'Thomas Doe', childdata: 'Mark', weeks3: '2098.25', weeks2: '4098.25', weeks1: '4098.25',
            current: '4098.25', amount: '1098.25', payment: '6361.84', creditNote: '5761.84', pendingAmount: 7201.84
        },
        {
            paynme: 'Rochaar', childdata: 'Adam', weeks3: '2098.25', weeks2: '4098.25', weeks1: '4098.25',
            current: '4098.25', amount: '1098.25', payment: '6361.84', creditNote: '5761.84', pendingAmount: 6061.84
        },
        {
            paynme: 'Mark Duo', childdata: 'Damen', weeks3: '2098.25', weeks2: '4098.25', weeks1: '4098.25',
            current: '4098.25', amount: '1098.25', payment: '6362.84', creditNote: '5761.84', pendingAmount: 7061.84
        },
        {
            paynme: 'Eric Denmark', childdata: 'Adam', weeks3: '2098.25', weeks2: '4098.25', weeks1: '4098.25',
            current: '4098.25', amount: '1098.25', payment: '6361.84', creditNote: '5761.84', pendingAmount: 5061.84
        },
        {
            paynme: 'Reazil Montrel', childdata: 'Lilly', weeks3: '2088.25', weeks2: '4098.25', weeks1: '4098.25',
            current: '4098.25', amount: '1098.25', payment: '6361.84', creditNote: '5761.84', pendingAmount: 3861.84
        },
        {
            paynme: 'Peter Lewis', childdata: 'Thomas', weeks3: '2078.25', weeks2: '4098.25', weeks1: '4098.25',
            current: '4098.25', amount: '1098.25', payment: '6361.84', creditNote: '5761.84', pendingAmount: 7061.84
        },
        {
            paynme: 'Maron Dremz', childdata: 'Brian', weeks3: '2075.25', weeks2: '4098.25', weeks1: '4098.25',
            current: '4098.25', amount: '1098.25', payment: '5781.84', creditNote: '5761.84', pendingAmount: 5071.84
        }
    ];

    displayedColumns: string[] = ['paynme', 'childdata', 'weeks3', 'weeks2', 'weeks1', 'current', 'amount', 'payment', 'creditNote', 'pendingAmount'];
    dataSource = new MatTableDataSource(this.transactions);

    constructor(private _liveAnnouncer: LiveAnnouncer) {
    }

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    ngAfterViewInit() {
        this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;   
    }

    showmore() {
        this.moreOptions = !this.moreOptions;
    }

    showexportoption() {
        this.moreinfo = !this.moreinfo;
        this.hideicon = !this.hideicon;
    }

    closeoption() {
        debugger;
        this.moreinfo = true;
        this.hideicon = false;
        debugger;
    }

    dataselection() {
        this.checkshow = !this.checkshow;
        console.log(this.checkshow);
    }

    select(item: string) {
        this.SelectedItem = item;
        this.OnChange.emit(this.SelectedItem);
        this.dataselection();
    }

    /** Announce the change in sort state for assistive technology. */
    announceSortChange(sortState: Sort) {
        debugger;
        if (sortState.direction) {
            this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
        } else {
            this._liveAnnouncer.announce('Sorting cleared');
        }
    }

    /** Gets the total cost of all transactions. */
    getTotalCost() {
        return this.transactions.map(t => t.pendingAmount).reduce((acc, value) => acc + value, 0);
    }

}
