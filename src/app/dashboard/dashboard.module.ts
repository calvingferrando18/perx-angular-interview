// npm packages
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
// our packages
import { DashboardContainerComponent } from './container/container.component';
import { DashboardService } from './dashboard.service';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DirectiveComponent } from './pages/directive/directive.component';
import { ListComponent } from './pages/list/list.component';
import { SharedModule } from '../shared/shared.module';
import {MatInputModule} from "@angular/material/input";

@NgModule({
  declarations: [
    DashboardContainerComponent,
    DirectiveComponent,
    ListComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    HttpClientModule,
    SharedModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  providers: [DashboardService],
})
export class DashboardModule { }
