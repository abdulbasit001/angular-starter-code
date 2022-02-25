import { Component, OnInit } from '@angular/core';
import { EmployeesProviderService } from '../Services/employees-provider.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
})
export class EmployeesComponent implements OnInit {
  public employees: Array<any> = [];
  constructor(private _employee: EmployeesProviderService) {}
  ngOnInit(): void {
    this.employees = this._employee.getEmployee();
  }
}
