import { Component,OnInit } from '@angular/core';
import { Course } from 'src/app/Models/course';
import { CourseService } from 'src/app/Services/course.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course-delete',
  templateUrl: './course-delete.component.html',
  styleUrls: ['./course-delete.component.css']
})
export class CourseDeleteComponent implements OnInit {



allCourse:Course[]=[];
courseId=1;
course:Course|null=new Course();

  constructor(public courseService:CourseService, private ac:ActivatedRoute){
    this.courseId=this.ac.snapshot.params['id'];

  }
  ngOnInit(): void {
    this.courseService.getAll().subscribe(data=>{
      this.allCourse=data;
    })

    this.courseService.getCourse(this.courseId).subscribe(data=>{
      this.course=data;})
  }

  Delete()
  {
    this.courseService.deleteCourse(this.courseId).subscribe(data=>{
      console.log(data)
    });
    alert("Course Deleted")
  }
}
