import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl } from '@angular/forms'
@Component({
  selector: 'app-save-designation',
  templateUrl: './save-designation.component.html',
  styleUrls: ['./save-designation.component.css']
})
export class SaveDesignationComponent implements OnInit {
designationForm=new FormGroup({
 Name: new FormControl('')
});
  constructor() { }

  ngOnInit(): void {
  }
  submitForm(){
    console.warn(this.designationForm.value)
  }
}
