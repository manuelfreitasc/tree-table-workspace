import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TreeTableModule } from 'projects/tree-table/src/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    TreeTableModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
