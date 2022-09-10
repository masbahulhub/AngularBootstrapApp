import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-save-department',
  templateUrl: './save-department.component.html',
  styleUrls: ['./save-department.component.css']
})
export class SaveDepartmentComponent implements OnInit {
  departmentForm = new FormGroup({
    Name: new FormControl(''),
    Location: new FormControl(''),
  });
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){
    console.warn(this.departmentForm.value);

  }
}
