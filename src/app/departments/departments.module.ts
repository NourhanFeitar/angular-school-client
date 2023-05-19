import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartmentListComponent } from './department-list/department-list.component';
import { DepartmentAddComponent } from './department-add/department-add.component';
import { FormsModule } from '@angular/forms';
import { DepartmentDetailsComponent } from './department-details/department-details.component';
import { DepartmentEditComponent } from './department-edit/department-edit.component';



@NgModule({
  declarations: [
    DepartmentListComponent,
    DepartmentAddComponent,
    DepartmentDetailsComponent,
    DepartmentEditComponent
  ],
  imports: [
    CommonModule,FormsModule
  ],
  exports:[DepartmentListComponent]
})
export class DepartmentsModule {}
