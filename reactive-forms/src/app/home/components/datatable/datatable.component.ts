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
            { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', status: 'In-Progress' },
            { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He', status: 'Completed' },
            { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li', status: 'Canceled' },
            { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be', status: 'Not Started' },
            { position: 5, name: 'Boron', weight: 10.811, symbol: 'B', status: 'Canceled' },
            { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C', status: 'In-Progress' },
            { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N', status: 'Canceled' },
            { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O', status: 'Canceled' },
            { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F', status: 'Completed' },
            { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne', status: 'In-Progress' },
      ]

      dataSource = new MatTableDataSource(this.ELEMENT_DATA);
      displayedColumns: Array<string> = [
            'name', 'weight'
      ]
      columnOptions: Array<string> = [];
      selectStatusOptions: Array<string> = ['In-Progress', 'Not Started', 'Completed', 'Canceled'];
      filters: { defaultFilter: any } = {
            defaultFilter: ''
      }

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

      onSelectChange(event: any) {
            switch (event.controlName) {
                  case 'displayedColumns':
                        this.displayedColumns = event.value;
                        break;
                  case 'status':
                        let searchObj: any = {
                              status: event.value
                        }
                        this.applyColumnFilter(searchObj);
                        break;
            }
      }

      applyFilter(event: any) {
            let value = ((event.target) as HTMLInputElement).value;
            /**
             * For Angular Datatable (MatTableDataSource) defaultFilter
             * 
            *     this.filters.defaultFilter = this.dataSource.filterPredicate;
            *     this.dataSource.filter = value.trim().toLocaleLowerCase();
            */

            /**
             * For customized, column based filtering
             */
            let searchObj: any = {}
            this.dataSource.filterPredicate = this.overrideFilterPredicate();
            this.displayedColumns.forEach((column) => {
                  searchObj[column] = [value];
            })
            this.applyColumnFilter(searchObj)

      }

      applyColumnFilter(filter: any) {
            this.dataSource.filterPredicate = this.overrideFilterPredicate();
            this.dataSource.filter = JSON.stringify(filter);

      }

      overrideFilterPredicate() {
            let filterFunction = (data: any, filter: string) => {
                  let found = false;
                  let searchObj = JSON.parse(filter);
                  let isFilter = false;
                  for (let prop in searchObj) {
                        if (searchObj[prop] != '')
                              isFilter = true;
                        else
                              delete searchObj[prop];
                  }

                  if (isFilter) {
                        for (let prop in searchObj) {
                              searchObj[prop].forEach((item) => {
                                    item.trim().toLowerCase().split(' ').forEach((word) => {
                                          if (data[prop].toString().toLowerCase().indexOf(word) != -1 && isFilter)
                                                found = true;
                                    })
                              })
                        }
                  } else
                        return true;
                  return found;
            }
            return filterFunction;
      }
}