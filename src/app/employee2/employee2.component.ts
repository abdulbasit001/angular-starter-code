import { Component, OnInit } from '@angular/core';
import { EmployeesProviderService } from '../Services/employees-provider.service';

@Component({
  selector: 'app-employee2',
  templateUrl: './employee2.component.html',
  styleUrls: ['./employee2.component.css'],
})
export class Employee2Component implements OnInit {
  public employees2: Array<any> = [];

  constructor(private _getEmployees: EmployeesProviderService) {}

  ngOnInit(): void {
    this.employees2 = this._getEmployees.getEmployee();
    console.log(this.employees2);
  }
}
