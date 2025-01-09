import { NgModule } from '@angular/core';
import { TreeTableComponent } from './tree-table.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [TreeTableComponent],
  imports: [
    CommonModule
  ],
  exports: [TreeTableComponent]
})
export class TreeTableModule { }
