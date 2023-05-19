import { Component, EventEmitter, Output } from '@angular/core';
import { Department } from 'src/app/Models/department';

@Component({
  selector: 'app-department-add',
  templateUrl: './department-add.component.html',
  styleUrls: ['./department-add.component.css']
})
export class DepartmentAddComponent {

newDepartment= new Department();
@Output() onDepartmentAdd:EventEmitter<Department>=new EventEmitter<Department>();
 addDepartment(){
 this.onDepartmentAdd.emit(this.newDepartment);
 }
}
