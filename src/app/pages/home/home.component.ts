import { Component,  OnInit, inject  } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { EmployeeSearchComponent } from '../../components/employee-search/employee-search.component';
import { EmployeeTableComponent } from '../../components/employee-table/employee-table.component';
import { EmployeeProfileComponent } from '../../components/employee-profile/employee-profile.component';
import { Employee } from '../../models/employee';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [EmployeeSearchComponent, EmployeeTableComponent, EmployeeProfileComponent,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  private employeeService = inject(EmployeeService);

  employees: Employee[] = [];
  filteredEmployees: Employee[] = [];
  employee: Employee | null = null; 
  employeeIs: boolean = true;

  ngOnInit() {
    this.employeeService.getEmployees().subscribe(data => {
      this.employees = data;
      this.filteredEmployees = data;
    });
  }

  handleSearch(employeeId: string) {
    this.employeeIs = true;
    if (!employeeId) {
      this.filteredEmployees = this.employees;
    } else {
      this.employeeService.getEmployeeById(employeeId).subscribe(
        employee => {
          this.employee= employee
          this.filteredEmployees = [employee]
        },
        () => {
          this.employeeIs = false;
          this.filteredEmployees = []
        }
      );
    }
  }
}
