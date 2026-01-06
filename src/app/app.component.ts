import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuperTableComponent } from '../../project/superTable/super-table.component';
import { SuperTableConfig } from '../../project/superTable/super-table.types';
import { DataService } from './data.service';
import { ButtonModule } from 'primeng/button';
import { DrawerModule } from 'primeng/drawer';
import { AvatarModule } from 'primeng/avatar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, SuperTableComponent, ButtonModule, DrawerModule, AvatarModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  visible: boolean = true;
  title = 'virtusa-test-project';
  private readonly dataService = inject(DataService);

  // readonly modes = ['Basic', 'Pagination', 'Sortable', 'Gridlines', 'Zebra Striped'];
  readonly modes = [
    'Basic', 'Gridlines', 'Pagination', 'Sort', 'Selection', 'Reorder', 'Column Resize', 
    'Row Expansion',
    'Templating', 'Conditional Styles'
  ];
  currentMode: string = '';
  activeConfig: SuperTableConfig | null = null;
  activeData: any[] = [];

  selectMode(mode: string) {
    this.currentMode = mode;
    // 1. Force Destroy
    this.activeConfig = null;

    // 2. Recreate instance with new data
    setTimeout(() => {
      this.loadConfigForMode(mode);
    }, 100);
  }

  loadConfigForMode(mode: string) {
    const fullData = this.dataService.getProducts();

    switch (mode) {
      case 'Basic':
        this.activeConfig = {
          columns: [
            { field: 'id', header: 'ID' },
            { field: 'name', header: 'Product Name' },
            { field: 'category', header: 'Category' }
          ]
        };
        this.activeData = fullData.slice(0, 5);
        break;

      case 'Gridlines':
        this.activeConfig = {
          columns: [{ field: 'name', header: 'Name' }, { field: 'price', header: 'Price' }],
          showGridlines: true,
          stripedRows: true,
          size: 'small'
        };
        this.activeData = fullData.slice(0, 10);
        break;

      case 'Pagination':
        this.activeConfig = {
          columns: [{ field: 'name', header: 'Name' }, { field: 'price', header: 'Price' }],
          paginator: true,
          rows: 5
        };
        this.activeData = fullData;
        break;

      case 'Selection':
        this.activeConfig = {
          columns: [{ field: 'name', header: 'Name' }, { field: 'category', header: 'Category' }],
          selectionMode: 'multiple',
          dataKey: 'id'
        };
        this.activeData = fullData;
        break;

      case 'Row Expansion':
        this.activeConfig = {
          columns: [{ field: 'name', header: 'Name' }, { field: 'price', header: 'Price' }],
          rowExpansion: true,
          dataKey: 'id'
        };
        this.activeData = fullData.slice(0, 5);
        break;

      case 'Column Resize':
        this.activeConfig = {
          columns: [{ field: 'name', header: 'Name' }, { field: 'price', header: 'Price' }, { field: 'category', header: 'Category' }],
          resizableColumns: true
        };
        this.activeData = fullData;
        break;

      case 'Reorder':
        this.activeConfig = {
          columns: [{ field: 'id', header: 'ID' }, { field: 'name', header: 'Name' }, { field: 'category', header: 'Category' }],
          reorderableColumns: true
        };
        this.activeData = fullData;
        break;

      case 'Sort':
          this.activeConfig = {
            columns: [
              { field: 'name', header: 'Name', sortable: true },
              { field: 'price', header: 'Price', sortable: true },
              { field: 'category', header: 'Category', sortable: true }
            ]
          };
          this.activeData = fullData;
          break;

      default:
        // Fallback for modes not yet fully implemented
        this.activeConfig = {
          columns: [{ field: 'id', header: 'ID' }, { field: 'name', header: 'Feature Coming Soon' }]
        };
        this.activeData = [];
        break;
    }
  }

  handleEvent(type: string, event: any) {
    console.log(`Event: ${type}`, event);
  }
}