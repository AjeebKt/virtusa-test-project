import { Component, Input, Output, EventEmitter, ContentChild, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { SuperTableConfig } from './super-table.types';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'super-table',
  standalone: true,
  imports: [CommonModule, TableModule, ButtonModule],
  templateUrl: './super-table.component.html',
  styleUrls: ['./super-table.component.scss']
})
export class SuperTableComponent {
  @Input() config!: SuperTableConfig;
  @Input() data: any[] = [];
  
  // Events
  @Output() onRowSelect = new EventEmitter<any>();
  @Output() onPage = new EventEmitter<any>();
  @Output() onSort = new EventEmitter<any>();

  // For custom cell templates from parent
  @Input() bodyTemplate: TemplateRef<any> | null = null;
  @Input() expansionTemplate: TemplateRef<any> | null = null;
}