import { Component,Input,Output,EventEmitter } from '@angular/core';
import { Department } from 'src/app/Models/department';

@Component({
  selector: 'app-department-edit',
  templateUrl: './department-edit.component.html',
  styleUrls: ['./department-edit.component.css']
})
export class DepartmentEditComponent {
@Output() onEditDepartment:EventEmitter<Department>=new EventEmitter<Department>();
@Input() departmentEdit=new Department;

editDepartment()
{
  
  this.onEditDepartment.emit(this.departmentEdit);
}

}
