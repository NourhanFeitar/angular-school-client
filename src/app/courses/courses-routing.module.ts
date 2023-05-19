import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { CourseDeleteComponent } from './course-delete/course-delete.component';
import { CoursesUpdateComponent } from './courses-update/courses-update.component';
import {RouterModule,Routes} from '@angular/router';
import { CourseDetailsComponent } from './course-details/course-details.component';


const routes:Routes=[
  {path:'courses',component:CoursesListComponent},
  {path:'courses/details/:id',component:CourseDetailsComponent},
  {path:'courses/update/:id',component:CoursesUpdateComponent},
  {path:'courses/delete/:id',component:CourseDeleteComponent},
]



@NgModule({
  declarations: [],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class CoursesRoutingModule { }
