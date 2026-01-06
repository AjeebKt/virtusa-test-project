export interface TableColumn {
  field: string;
  header: string;
  type?: 'text' | 'numeric' | 'date' | 'boolean' | 'status' | 'image';
  sortable?: boolean;
  filter?: boolean;
  width?: string;
  frozen?: boolean;
}

export interface SuperTableConfig {
  columns: TableColumn[];
  paginator?: boolean;
  rows?: number;
  rowsPerPageOptions?: number[];
  selectionMode?: 'single' | 'multiple' | null;
  dataKey?: string;
  resizableColumns?: boolean;
  reorderableColumns?: boolean;
  showGridlines?: boolean;
  stripedRows?: boolean;
  size?: 'small' | 'large';
  rowExpansion?: boolean;
  editMode?: 'cell' | 'row';
}