import { TableRowOptions } from "./../../../../dist/tree-table-lib/lib/tree-table-lib.interfaces.d";
// app.component.ts
import { Component } from "@angular/core";
import {
  Column,
  TableRow,
  TableRowChild,
} from "projects/tree-table-lib/src/public-api";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
})
export class AppComponent {
  columns: Column[] = [
    { field: "cliente", header: "Cliente", type: "button" },
    { field: "unidade", header: "Unidade", type: "text" },
    { field: "valorUnitario", header: "Valor Unitário", type: "text" },
    { field: "totalSemIva", header: "Total Sem IVA", type: "text" },
    { field: "iva", header: "IVA", type: "text" },
    { field: "totalComIva", header: "Total Com IVA", type: "text" },
    { field: "tipo", header: "Tipo", type: "text" },
    { field: "estado", header: "Estado", type: "estado" },
  ];

  tableData: TableRow[] = [
    {
      id: 1,
      cliente: "JORDAO CABANGA",
      unidade: "-",
      valorUnitario: "-",
      totalSemIva: "-2,948.99",
      iva: "-",
      totalComIva: "-",
      tipo: "-",
      estado: "Não Facturado",
      isSelected: false,
      children: [
        {
          id: 1,
          cliente: "JORDAO CABANGA",
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
          id: 2,
          cliente: "JORDAO CABANGA",
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
    {
      id: 2,
      cliente: "JORDAO CABANGA",
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
          id: 4,
          cliente: "JORDAO CABANGA",
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
          id: 5,
          cliente: "JORDAO CABANGA",
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

  options: TableRowOptions[] = [
    {
      id: 1,
      type: "link",
      field: "Visite-me in Github",
      linkAtts: {
        href: "https://github.com/manuelfreitasc",
      },
    },
    {
      id: 1,
      type: "button",
      field: "Open Modal",
      buttonAtts: {
        dataBsToggle: "modal", // Pode ser alterado dinamicamente
        dataBsTarget: "#exampleModal",
      },
    },
  ];

  onRowExpanded(row: TableRow) {
    console.log("Row expanded:", row);
  }

  onOptionsClicked(row: TableRow | TableRowChild) {
    console.log("Options clicked:", row);
  }

  parentSelectionChanged(row: TableRow) {
    console.log("toggleParentSelectionOptions clicked:", row);
  }

  toggleChildSelection(row: TableRow) {
    console.log("toggleChildSelection clicked:", row);
  }
  onItemClick(row: TableRow) {
    console.log("onItemClick clicked:", row);
  }

}
