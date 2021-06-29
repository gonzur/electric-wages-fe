import { Component, Input, OnInit } from '@angular/core';
import { Report } from "./../../common-models/export";

@Component({
  selector: 'app-report-panel',
  templateUrl: './report-panel.component.html',
  styleUrls: ['./report-panel.component.css']
})
export class ReportPanelComponent implements OnInit {

  @Input() public report: Report = new Report();

  constructor() { }

  ngOnInit(): void {

  }

}
