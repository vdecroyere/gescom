import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SchoolsRoutingModule } from './schools-routing.module';
import { SchoolsListComponent } from './components/schools-list/schools-list.component';

@NgModule({
  declarations: [SchoolsListComponent],
  imports: [
    CommonModule,
    SchoolsRoutingModule
  ]
})
export class SchoolsModule { }
