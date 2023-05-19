import { Component } from '@angular/core';
import { Department } from 'src/app/Models/department';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent {

departments:Department[]=[
  new Department(1,"Angular","Alex"),
  new Department(2,"C#","Smart Village"),
  new Department(3,"BI","Mansoura"),
  new Department(4,"MVC","Alex")
];

departmentDetail=new Department();

detailsFlag=false;
editFlag=false;
deleteFlag=false
deletedeptId=1;

eDepartmet=new Department();
index=1;

DeleteDeptId(n:number){
  this.deletedeptId=n;
  this.deleteFlag=true;
}

deleteDepartment(){
  for (let i=0;i<=this.departments.length;i++){
    if(this.departments[i].id==this.deletedeptId){
      this.departments.splice(i,1)
      this.deleteFlag=false;
    }}

 }

findDepartment(n:number){
  for (let i=0;i<=this.departments.length;i++){
    if(this.departments[i].id==n){
      this.eDepartmet.id=this.departments[i].id;
      this.eDepartmet.name=this.departments[i].name;
      this.eDepartmet.location=this.departments[i].location;
      this.editFlag=true;//WIll Show Edit DIv
      this.index=i;
      break;
    }
  }
}

editDepartmentDetails(obj:Department){


  this.departments[this.index].id=obj.id;
  this.departments[this.index].name=obj.name;
  this.departments[this.index].location=obj.location;
  this.editFlag=false;
}

 ShowDetails(n:number){
  for (let i=0;i<=this.departments.length;i++){
    if(this.departments[i].id==n){
      this.departmentDetail.id=this.departments[i].id;
      this.departmentDetail.name=this.departments[i].name;
      this.departmentDetail.location=this.departments[i].location;
      this.detailsFlag=true;
      break;
    }
  }
 }

 addNewDepartment(obj:Department){
  this.departments.push(obj);
 }


  // checkFun(n:any,m:any)
  // {
  //   console.log("n:" + n, "m="+ m)
  //   if(n=="" || m == "")
  //   {
  //     alert("Enter Full Data")
      
  //   }
  //   else{
      
  //   this.changeDetails(n,m);
  //  }
}


