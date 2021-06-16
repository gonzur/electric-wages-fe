import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarBaseComponent } from './toolbar-base/toolbar-base.component';
import { MatToolbarModule } from '@angular/material/toolbar'



@NgModule({
  declarations: [
    ToolbarBaseComponent
  ],
  imports: [
    MatToolbarModule,
    CommonModule
  ],
  exports: [
    ToolbarBaseComponent
  ]
})
export class HeaderModule { }
