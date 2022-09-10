import { Component, OnInit } from '@angular/core';
import { UtilityService } from 'src/app/utility.service';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {

  constructor(private utilityService:UtilityService) { }

  ngOnInit(): void {
    this.departments= this.utilityService.getAllDepartment();
  }
departments:any;

}
