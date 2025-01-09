import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import {
  Column,
  TableRow,
  TableRowChild,
  TableRowOptions,
  TableRowOptionStyle,
} from "./tree-table.interfaces";
import {
  buttonStyles,
  dropdownContainerStyles,
  dropdownItemStyles,
  dropdownMenuStyles,
} from "./tree-table.style";

@Component({
  selector: "tree-table",
  templateUrl: "./tree-table.component.html",
  styleUrls: ["./tree-table.component.scss"],
})
export class TreeTableComponent implements OnInit {
  // Inputs
  @Input() rows: TableRow[] = [];
  @Input() options: TableRowOptions[] = [];
  @Input() columns: Column[] = [];
  @Input() showCheckbox = true;
  @Input() showOptions = true;
  @Input() expandedByDefault = false;
  @Input() optionStyle: TableRowOptionStyle;

  // Outputs
  @Output() rowExpanded = new EventEmitter<TableRow>();
  @Output() rowCollapsed = new EventEmitter<TableRow>();
  @Output() rowSelected = new EventEmitter<{
    row: TableRow | TableRowChild;
    selected: boolean;
  }>();
  @Output() parentSelectionChanged = new EventEmitter<{
    row: TableRow;
    selected: boolean;
  }>();
  @Output() childSelectionChanged = new EventEmitter<{
    parent: TableRow;
    child: TableRowChild;
    selected: boolean;
  }>();
  @Output() optionsClicked = new EventEmitter<TableRow | TableRowChild>();
  @Output() onItemClick = new EventEmitter<TableRow | TableRowChild>();

  defaultStyles: TableRowOptionStyle = {
    dropdownContainerStyles,
    dropdownMenuStyles,
    dropdownItemStyles,
    buttonStyles,
  };

  constructor() {}

  ngOnInit() {
    console.log("NELO==>", this.options);

    if (this.expandedByDefault) {
      this.rows.forEach((row) => (row.isExpanded = true));
    }
  }

  getFieldValue(row: any, field: string): any {
    return field.split(".").reduce((obj, key) => {
      if (obj && obj[key] !== undefined) {
        return obj[key];
      }
      return undefined; // Ou outro valor padrão, se preferir
    }, row);
  }

  toggleRow(row: TableRow): void {
    row.isExpanded = !row.isExpanded;
    if (row.isExpanded) {
      this.rowExpanded.emit(row);
    } else {
      this.rowCollapsed.emit(row);
    }
  }

  toggleParentSelection(row: TableRow): void {
    row.isSelected = !row.isSelected;
    if (row.children) {
      row.children.forEach((child) => (child.isSelected = row.isSelected));
    }
    this.parentSelectionChanged.emit({ row, selected: row.isSelected });
    this.rowSelected.emit({ row, selected: row.isSelected });
  }

  toggleChildSelection(child: TableRowChild, parentRow: TableRow): void {
    child.isSelected = !child.isSelected;
    if (parentRow.children) {
      parentRow.isSelected = parentRow.children.every((c) => c.isSelected);
    }
    this.childSelectionChanged.emit({
      parent: parentRow,
      child,
      selected: child.isSelected,
    });
    this.rowSelected.emit({ row: child, selected: child.isSelected });
  }

  onOptionsClick(row: TableRow | TableRowChild, index: number): void {
    this.rows.forEach((r) => {
      r.children.forEach((child) => {
        if (child.id === row.id) {
          child.isExpanded = !child.isExpanded;
        } else {
          child.isExpanded = false;
        }
      });
    });
  }

  onOptionItemClick(row: TableRow | TableRowChild): void {
    this.onItemClick.emit(row);
  }

  hasChildren(row: TableRow): boolean {
    return row.children && row.children.length > 0;
  }

  trackByFn(index: number, item: TableRow): number {
    return item.id;
  }
}
