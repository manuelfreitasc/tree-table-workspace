// tree-table.interfaces.ts
export interface Column {
  field: string;
  header: string;
  type?: 'text' | 'number' | 'currency' | 'estado' | 'button';
  typeHeader?: 'text';
  width?: string;
  visible?: boolean;
}

export interface TableRowChild {
  [key: string]: any;
  isSelected?: boolean;
  isExpanded?: boolean;
}

export interface TableRow {
  id: number;
  [key: string]: any;
  isExpanded?: boolean;
  isSelected?: boolean;
  children?: TableRowChild[];
}

export interface TableRowOptionStyle {
  dropdownContainerStyles?: Record<string, string>;
  buttonStyles?: Record<string, string>;
  dropdownMenuStyles?: Record<string, string>;
  dropdownItemStyles?: Record<string, string>;
}

export interface TableRowOptions {
  id: number;
  [key: string]: any;
  type?: 'link' | 'button';
  buttonAtts?: TableRowOptionsButtonAtts
  linkAtts?: TableRowOptionsLinkAtts
}

export interface TableRowOptionsButtonAtts {
  dataBsToggle?: string;    // Pode ser alterado dinamicamente
  dataBsTarget?: string;
}


export interface TableRowOptionsLinkAtts {
  href?: string;
}
