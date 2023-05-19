import { Component,OnInit } from '@angular/core';
import { Course } from 'src/app/Models/course';
import { CourseService } from 'src/app/Services/course.service';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit{
  
  constructor(public courseService:CourseService){

  }
  
  courses:Course[]=[];
  
  ngOnInit(): void {

    this.courseService.getAll().subscribe(data=>{
      this.courses=data;
    })
  }

}
