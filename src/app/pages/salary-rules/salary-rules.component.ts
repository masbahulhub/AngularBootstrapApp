import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-salary-rules',
  templateUrl: './salary-rules.component.html',
  styleUrls: ['./salary-rules.component.css']
})
export class SalaryRulesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.salaryRules=[
      {
        departmentId:1,
        departmentName:"English",

        designationId:1,
        designationName:"Principal",

        salary:70000.00
      },
      {
        departmentId:2,
        departmentName:"Bangla",

        designationId:2,
        designationName:"Lecturer",

        salary:40000.00
      }
    ];
  }
salaryRules:any;
}
