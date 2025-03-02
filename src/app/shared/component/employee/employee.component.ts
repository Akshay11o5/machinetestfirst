import { Component, OnInit } from '@angular/core';
import { Employee } from '../../module/employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
})
export class EmployeeComponent implements OnInit {
  employees: Array<Employee> = [
    { id: 201, name: 'Sam Wilson', department: 'HR', salary: 60000 },
    { id: 202, name: 'Diana Prince', department: 'Finance', salary: 75000 },
    { id: 203, name: 'Bruce Wayne', department: 'IT', salary: 90000 },
    { id: 204, name: 'Clark Kent', department: 'Marketing', salary: 65000 },
    { id: 205, name: 'Peter Parker', department: 'Sales', salary: 55000 },
  ];

  constructor() {}

  ngOnInit(): void {}
}
