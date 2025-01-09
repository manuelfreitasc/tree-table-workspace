/** import { Component, OnInit } from "@angular/core";
interface TableRowChild {
  cliente: string;
  municipio: string;
  rota: string;
  numeroConta: string;
  contrato: string;
  produto: string;
  quantidade: string;
  unidade: string;
  valorUnitario: string;
  totalSemIva: string;
  iva: string;
  totalComIva: string;
  tipo: string;
  estado: string;
  isSelected?: boolean;
}

interface TableRow {
  id: number;
  cliente: string;
  municipio: string;
  rota: string;
  numeroConta: string;
  contrato: string;
  produto: string;
  quantidade: string;
  unidade: string;
  valorUnitario: string;
  totalSemIva: string;
  iva: string;
  totalComIva: string;
  tipo: string;
  estado: string;
  isExpanded?: boolean;
  isSelected?: boolean;
  children?: TableRowChild[];
}

@Component({
  selector: "tree-table",
  templateUrl: './tree-table-lib.component.html',
  styleUrls: ['./tree-table-lib.component.scss']
})
export class TreeTableLibComponent implements OnInit {
  rows: TableRow[] = [
    {
      id: 1,
      cliente: "JORDAO CABANGA",
      municipio: "MAPUTO",
      rota: "449",
      numeroConta: "400",
      contrato: "83,00",
      produto: "M3",
      quantidade: "-",
      unidade: "-",
      valorUnitario: "-",
      totalSemIva: "-2,948.99",
      iva: "-",
      totalComIva: "-",
      tipo: "-",
      estado: "Não Facturado",
      isExpanded: false,
      isSelected: false,
      children: [
        {
          cliente: "JORDAO CABANGA",
          municipio: "MAPUTO",
          rota: "449",
          numeroConta: "400",
          contrato: "Disponibilidade de serviço",
          produto: "1",
          quantidade: "Mes",
          unidade: "99,00",
          valorUnitario: "99,00",
          totalSemIva: "99,00",
          iva: "11,88",
          totalComIva: "110,88",
          tipo: "LEITURA EFECTIVA",
          estado: "Não Facturado",
          isSelected: false,
        },
        {
          cliente: "JORDAO CABANGA",
          municipio: "MAPUTO",
          rota: "449",
          numeroConta: "400",
          contrato: "Doméstico Escalão 1",
          produto: "20",
          quantidade: "M3",
          unidade: "37,73",
          valorUnitario: "754,60",
          totalSemIva: "90,55",
          iva: "845,15",
          totalComIva: "LEITURA EFECTIVA",
          estado: "Não Facturado",
          isSelected: false,
          tipo: "",
        },
      ],
    },
  ];

  constructor() {}

  ngOnInit() {}

  toggleRow(row: TableRow): void {
    row.isExpanded = !row.isExpanded;
  }

  toggleParentSelection(row: TableRow): void {
    row.isSelected = !row.isSelected;
    if (row.children) {
      row.children.forEach((child) => (child.isSelected = row.isSelected));
    }
  }

  toggleChildSelection(child: TableRowChild, parentRow: TableRow): void {
    child.isSelected = !child.isSelected;
    if (parentRow.children) {
      parentRow.isSelected = parentRow.children.every((c) => c.isSelected);
    }
  }

  hasChildren(row: TableRow): boolean {
    return row.children && row.children.length > 0;
  }
}
*/

// tree-table.component.ts
import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import {
  Column,
  TableRow,
  TableRowChild,
  TableRowOptions,
  TableRowOptionStyle,
} from "./tree-table-lib.interfaces.js";
import {
  buttonStyles,
  dropdownContainerStyles,
  dropdownItemStyles,
  dropdownMenuStyles,
} from "./tree-table-lib.style";

@Component({
  selector: "lib-tree-table",
  templateUrl: "./tree-table-lib.component.html",
  styleUrls: ["./tree-table-lib.component.scss"],
})
export class TreeTableLibComponent implements OnInit {
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
