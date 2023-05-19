import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { CourseAddComponent } from './course-add/course-add.component';
import { CoursesUpdateComponent } from './courses-update/courses-update.component';
import { CoursesRoutingModule } from './courses-routing.module';
import { CourseDeleteComponent } from './course-delete/course-delete.component';



@NgModule({
  declarations: [
    CoursesListComponent,
    CourseAddComponent,
    CoursesUpdateComponent,
    CoursesUpdateComponent,
    CourseDeleteComponent
  ],
  imports: [
    CommonModule,FormsModule,CoursesRoutingModule
  ],
  exports:[CourseAddComponent,CourseAddComponent,  CoursesUpdateComponent,
    CourseDeleteComponent]
})
export class CoursesModule { }
