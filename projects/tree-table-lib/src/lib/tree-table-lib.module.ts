import { NgModule } from '@angular/core';
import { TreeTableLibComponent } from './tree-table-lib.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [TreeTableLibComponent],
  imports: [
    CommonModule
  ],
  exports: [TreeTableLibComponent]
})
export class TreeTableLibModule { }
