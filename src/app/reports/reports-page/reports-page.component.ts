import { Component, OnInit } from '@angular/core';
import { Employee, EmployeeHours, Report } from "../../common-models/export";

@Component({
  selector: 'app-reports-page',
  templateUrl: './reports-page.component.html',
  styleUrls: ['./reports-page.component.css']
})
export class ReportsPageComponent implements OnInit {

  reports: Array<Report> = new Array();
  constructor() {
    let report = new Report();
    let employeeHour = new EmployeeHours();
    let employee = new Employee();

    employee.name = "john doe"

    employeeHour.setEmployee(employee);
    employeeHour.setHours(0.0);

    report.date = "test date"
    report.reporter = "reporter name"
    report.location = "Miami, Fl"

    Array.from({length: 10}).forEach(() => {
      report.employeeHours.push(employeeHour);
    });

    Array.from({length: 100}).forEach(() => {
      this.reports.push(report);
    });
   }

  ngOnInit(): void {
  }

}
