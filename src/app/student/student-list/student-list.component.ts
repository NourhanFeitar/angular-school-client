import { Component } from '@angular/core';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent {
  stdName="Nourhan";
  stdId=1;
  age=25;
  deptNo=1


  changeDetails(n:any,i:any,)
  {
 
    this.stdName=n;
    this.stdId=i;
  }

  checkFun(n:any,m:any)
  {
    console.log("n:" + n, "m="+ m)
    if(n=="" || m == "")
    {
      alert("Enter Full Data")
      
    }
    else{
      
    this.changeDetails(n,m);
   }
  }
}