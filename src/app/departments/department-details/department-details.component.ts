import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Department } from 'src/app/Models/department';

@Component({
  selector: 'app-department-details',
  templateUrl: './department-details.component.html',
  styleUrls: ['./department-details.component.css']
})
export class DepartmentDetailsComponent {

@Input() departmentDetails=new Department();
@Output() onHide:EventEmitter<boolean>=new EventEmitter<boolean>();

hideMe(){
  this.onHide.emit(false);
}
}
