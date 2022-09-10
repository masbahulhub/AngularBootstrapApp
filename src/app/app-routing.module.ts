import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { DepartmentsComponent } from './pages/departments/departments.component';
import { SaveDepartmentComponent } from './pages/departments/save-department/save-department.component';
import { DesignationsComponent } from './pages/designations/designations.component';
import { SaveDesignationComponent } from './pages/designations/save-designation/save-designation.component';
import { HomeComponent } from './pages/home/home.component';
import { SalaryRulesComponent } from './pages/salary-rules/salary-rules.component';
import { SaveSalaryRuleComponent } from './pages/salary-rules/save-salary-rule/save-salary-rule.component';
import { SearchDepartmentComponent } from './pages/search-department/search-department.component';
import { SearchEmployeeComponent } from './pages/search-employee/search-employee.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"about",component:AboutComponent},

  {path:"department",component:DepartmentsComponent,
children:[
  {path:"save",component:SaveDepartmentComponent}
]
},
  {path:"designation",component:DesignationsComponent,
  children:[
    {path:"save",component:SaveDesignationComponent}
  ]
},
  {path:"salary-rule",component:SalaryRulesComponent,
  children:[
    {path:"save",component:SaveSalaryRuleComponent}
  ]
},

  {path:"search-department",component:SearchDepartmentComponent},
  {path:"search-employee",component:SearchEmployeeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
