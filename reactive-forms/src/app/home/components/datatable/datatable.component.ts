import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";

@Component({
      selector: 'app-datatable',
      templateUrl: './datatable.component.html',
      styleUrls: ['./datatable.component.scss']
})
export class DatatableCompoennt implements OnInit, AfterViewInit {

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
      displayedColumns: Array<string> = [
            'name', 'weight'
      ]
      columnOptions: Array<string> = [];
      selectStatusOptions: Array<string> = [];

      @ViewChild(MatPaginator) paginator!: MatPaginator;
      @ViewChild(MatSort) sort!: MatSort;

      ngOnInit() {
            this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
            if (this.ELEMENT_DATA.length != 0) {
                  for (let column in this.ELEMENT_DATA[0])
                        this.columnOptions.push(column);
            }
      }

      ngAfterViewInit() {
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
      }

      onCheckboxChange(event: any) {
            switch (event.controlName) {
                  case 'displayedColumns':
                        this.displayedColumns = event.value;
                        break;
                  case 'selectStatus':

                        break;
            }
      }

      applyFilter(event: any) {
            let value = ((event.target) as HTMLInputElement).value;
            this.dataSource.filter = value.trim().toLocaleLowerCase();
      }

      dropdownToggle(event: any) { }
}