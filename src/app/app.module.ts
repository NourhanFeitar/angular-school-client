import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import {RouterModule,Routes} from '@angular/router';
import { CoreModule } from './core/core.module';
import { StudentModule } from './student/student.module';
import { DepartmentsModule } from './departments/departments.module';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { CoursesModule } from './courses/courses.module';
import { CoursesListComponent } from './courses/courses-list/courses-list.component';
import { CourseDetailsComponent } from './courses/course-details/course-details.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { CoursesUpdateComponent } from './courses/courses-update/courses-update.component';
import { CourseDeleteComponent } from './courses/course-delete/course-delete.component';
import { AppRoutingModule } from './app-routing.module';



@NgModule({
  declarations: [
    AppComponent,
    AboutusComponent,
    ContactusComponent,
    HomeComponent,
    ErrorComponent,
   
 
  ],
  imports: [
    BrowserModule,HttpClientModule,CoreModule,StudentModule,DepartmentsModule,CoursesModule,FormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
