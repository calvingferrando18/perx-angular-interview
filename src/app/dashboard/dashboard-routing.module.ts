import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectiveComponent } from './pages/directive/directive.component';
import { DashboardContainerComponent } from './container/container.component';
import { ListComponent } from './pages/list/list.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardContainerComponent,
    children: [
      {
        path: '',
        component: ListComponent,
      },
      {
        path: 'directive',
        component: DirectiveComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule { }
