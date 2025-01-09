import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TreeTableLibModule } from 'projects/tree-table-lib/src/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    TreeTableLibModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
