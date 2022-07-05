// npm packages
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
// our packages
import { TextDirective } from './directives/text.directive';
import { NavComponent } from './nav/nav.component';

const importExport = [
  CommonModule,
  MatButtonModule,
  MatToolbarModule,
];

@NgModule({
  declarations: [
    NavComponent,
    TextDirective
  ],
  imports: [
    importExport,
    RouterModule
  ],
  exports: [
    ...importExport,
    NavComponent,
    TextDirective,
  ],
})
export class SharedModule { }
