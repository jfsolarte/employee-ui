import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Employee } from '../../models/employee';

@Component({
  selector: 'app-employee-search',
  imports: [FormsModule],
  templateUrl: './employee-search.component.html',
  styleUrl: './employee-search.component.css',
  standalone: true,
})
export class EmployeeSearchComponent {
  @Output() search = new EventEmitter<string>();
  employeeId: string = '';
  employee!: Employee | null;

  onSearch() {
    this.search.emit(this.employeeId);
  }
}
