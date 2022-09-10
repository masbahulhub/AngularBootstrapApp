import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DepartmentsComponent } from './pages/departments/departments.component';
import { SaveDepartmentComponent } from './pages/departments/save-department/save-department.component';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { DesignationsComponent } from './pages/designations/designations.component';
import { SalaryRulesComponent } from './pages/salary-rules/salary-rules.component';
import { SearchDepartmentComponent } from './pages/search-department/search-department.component';
import { SearchEmployeeComponent } from './pages/search-employee/search-employee.component';
import { SaveDesignationComponent } from './pages/designations/save-designation/save-designation.component';
import { SaveSalaryRuleComponent } from './pages/salary-rules/save-salary-rule/save-salary-rule.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DepartmentsComponent,
    SaveDepartmentComponent,
    AboutComponent,
    HomeComponent,
    DesignationsComponent,
    SalaryRulesComponent,
    SearchDepartmentComponent,
    SearchEmployeeComponent,
    SaveDesignationComponent,
    SaveSalaryRuleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
