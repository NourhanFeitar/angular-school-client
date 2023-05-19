import { Component,OnInit } from '@angular/core';
import { Course } from 'src/app/Models/course';
import { CourseService } from 'src/app/Services/course.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-courses-update',
  templateUrl: './courses-update.component.html',
  styleUrls: ['./courses-update.component.css']
})
export class CoursesUpdateComponent implements OnInit{

  constructor(public courseService:CourseService, private ac:ActivatedRoute){
  }

  courseId=1;
  chosenCourse:Course=new Course();
  allCourses:Course[]=[];

  ngOnInit(): void { //Getting Full Data Of Course
    this.courseService.getAll().subscribe(data=>{
      this.allCourses=data;
      
    this.courseId=this.ac.snapshot.params['id'];
    for(let i=0;i<this.allCourses.length;i++)
    {
      if(this.courseId==this.allCourses[i].id)
      {
        this.chosenCourse.id=this.allCourses[i].id;
        this.chosenCourse.name=this.allCourses[i].name;
        this.chosenCourse.creditHours=this.allCourses[i].creditHours;
      }
    }  
    })

  }

Update(){
  this.courseService.updateCourse(this.chosenCourse);
}
}
