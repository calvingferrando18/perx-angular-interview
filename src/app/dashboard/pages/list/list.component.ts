// npm packages
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
// our packages
import { DashboardService } from '../../dashboard.service';
import {IBook, IBookAttributes} from '../../dashboard.model';



@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements AfterViewInit {
  displayedColumns: string[] = ['id', 'image', 'content', 'created_at'];
  dataSource!: MatTableDataSource<IBook>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private dashboardService: DashboardService) { }

  ngAfterViewInit(): void {
    this.dashboardService.getJSON()
      .subscribe((response) => {
        this.dataSource = new MatTableDataSource(response.data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.dataSource.sortingDataAccessor = (item: IBook, property: string) => {
          switch(property) {
            case 'image': return item?.attributes?.display_properties?.image;
            case 'content': return item?.attributes?.content;
            case 'created_at': return item?.attributes?.created_at;
            default: // @ts-ignore
              return item[property];
          }
        };
        this.dataSource.filterPredicate = (data: IBook, filter: string): boolean => {
          const {
            content,
            created_at,
            display_properties,
          } = data?.attributes;

          if (data?.id?.toLowerCase().includes(filter)) {
            return true;
          }
          if (display_properties.image?.toLowerCase().includes(filter)) {
            return true;
          }
          if (content?.toLowerCase().includes(filter)) {
            return true;
          }
          return !!created_at?.toLowerCase().includes(filter);
        };
      });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
