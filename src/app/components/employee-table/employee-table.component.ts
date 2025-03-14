import { Component, Input  } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employee-table',
  imports: [CommonModule],
  templateUrl: './employee-table.component.html',
  styleUrl: './employee-table.component.css'
})
export class EmployeeTableComponent {
  @Input() employees: any[] = [];
}
