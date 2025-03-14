import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Employee } from '../../models/employee';

@Component({
  selector: 'app-employee-profile',
  imports: [CommonModule],
  templateUrl: './employee-profile.component.html',
  styleUrl: './employee-profile.component.css'
})
export class EmployeeProfileComponent {
  @Input() employee: Employee | null = null;
}
