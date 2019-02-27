import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonsListComponent } from './components/persons-list/persons-list.component'

import { PreferencesRoutingModule } from './preferences-routing.module';

@NgModule({
  declarations: [PersonsListComponent],
  imports: [
    CommonModule,
    PreferencesRoutingModule
  ]
})
export class PreferencesModule { }
