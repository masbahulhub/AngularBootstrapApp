import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms'
import { UtilityService } from 'src/app/utility.service';

@Component({
  selector: 'app-save-salary-rule',
  templateUrl: './save-salary-rule.component.html',
  styleUrls: ['./save-salary-rule.component.css']
})
export class SaveSalaryRuleComponent implements OnInit {

  salaryRuleForm=new FormGroup({
    DepartmentId:new FormControl(''),
    DesignationId:new FormControl(''),
    Salary:new FormControl('0.00')
  });
  departments:any;
  designations:any;
  constructor(private utilityService:UtilityService) { 
    
  }

  ngOnInit(): void {
    this.departments= this.utilityService.getAllDepartment();
    this.designations=this.utilityService.getAllDesignation();
  }
  
  onSubmit(){ 
    console.warn(this.salaryRuleForm.value);
  }

   
}
