import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportsPageComponent } from './reports-page/reports-page.component';
import { MatExpansionModule } from "@angular/material/expansion";
import { ReportPanelComponent } from './report-panel/report-panel.component';
import { ScrollingModule } from '@angular/cdk/scrolling'



@NgModule({
  declarations: [
    ReportsPageComponent,
    ReportPanelComponent
  ],
  imports: [
    CommonModule,
    MatExpansionModule,
    ScrollingModule
  ]
})
export class ReportsModule { }
