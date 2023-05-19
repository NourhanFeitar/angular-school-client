import { Component,OnInit } from '@angular/core';
import { Course } from 'src/app/Models/course';
import { CourseService } from 'src/app/Services/course.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-course-add',
  templateUrl: './course-add.component.html',
  styleUrls: ['./course-add.component.css']
})
export class CourseAddComponent{

  newCourse: Course = new Course()
  constructor(public courseService: CourseService,private router: Router) { }

  Add() {
    
    this.courseService.add(this.newCourse).subscribe(a=>{
      console.log(a);
    },er=>{
    console.log("error:"+er)
  });
  

  }
}

