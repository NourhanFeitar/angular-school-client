import { Component,OnInit,OnDestroy } from '@angular/core';
import { Course } from 'src/app/Models/course';
import { CourseService } from 'src/app/Services/course.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit,OnDestroy {
  
course:Course|null=null
courseId:number=1

  constructor(public courseService:CourseService, private ac:ActivatedRoute){ 
  }
  sub:Subscription|null=null;

  ngOnDestroy(): void {
    this.sub?.unsubscribe();

  }
  
  
  ngOnInit(): void {

    this.sub= this.ac.params.subscribe(data=>{
      this.courseService.getCourse(data['id']).subscribe(r=>{
        this.course=r;})})

    // this.courseId=this.ac.snapshot.params['id'];
    // this.course=this.courseService.getCourse(this.courseId);
  }

}
