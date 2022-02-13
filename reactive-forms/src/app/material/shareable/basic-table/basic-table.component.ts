import { LiveAnnouncer } from "@angular/cdk/a11y";
import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";
import { MatSort, MatSortModule, Sort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";

@Component({
      selector: 'material-basic-table',
      templateUrl: './basic-table.component.html',
      styleUrls: ['./basic-table.component.scss']
})
export class BasicTableComponent implements OnInit, AfterViewInit {

      ELEMENT_DATA: Array<any> = [
            { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
            { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
            { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
            { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
            { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
            { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
            { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
            { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
            { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
            { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
      ]

      dataSource = new MatTableDataSource(this.ELEMENT_DATA);
      displayedColumns: Array<any> = [
            'position', 'name', 'weight', 'symbol'
      ]

      /**
       * Sorting
       */
      @ViewChild(MatSort) sort!: MatSort;

      constructor(
            private _liveAnnouncer: LiveAnnouncer
      ) { }

      ngOnInit() {
            this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
      }

      ngAfterViewInit() {
            this.dataSource.sort = this.sort;
      }

      applyFilter(event: any) {
            let value = ((event.target) as HTMLInputElement).value;
            this.dataSource.filter = value.trim().toLocaleLowerCase();
      }

      announceSortChange(sortState: Sort) {
            if (sortState.direction) {
                  this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
            } else {
                  this._liveAnnouncer.announce('Sorting cleared');
            }
      }
}