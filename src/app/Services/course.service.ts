import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Course } from '../Models/course';




@Injectable({
  providedIn: 'root'
})
export class CourseService {
  baseUrl:string="https://localhost:7010/api/course/"



  getAll(){
    
    return this.http.get<Course[]>(this.baseUrl);

      }
    
  

  add(course:Course){

    return this.http.post<Course>(this.baseUrl,course);

  }

  getCourse(id:number)
  {
    return this.http.get<Course>(this.baseUrl+id)

  }
 
  updateCourse(course:Course){
    return this.http.put<Course>(this.baseUrl+course.id,course)

  }

  deleteCourse(id:number){
    return this.http.delete(this.baseUrl+id);

  }

  
  constructor(public http:HttpClient) { }
}
