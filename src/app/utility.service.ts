import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  departments:any;
  designations:any;
  constructor() { }

  getAllDepartment(){
     
      this.departments=[
        {
          id:1,
        name:"Mathmatics",
        location:"Buildine-1, Floor-2"
      },
      {
        id:2,
        name:"English",
        location:"Buildine-1, Floor-3"
      },
      {
        id:3,
        name:"Accounting",
        location:"Buildine-2, Floor-1"
      },
      {
        id:4,
        name:"Bangla",
        location:"Buildine-2, Floor-2"
      }
      ,
      {
        id:5,
        name:"Botany",
        location:"Buildine-2, Floor-3"
      },
      {
        id:6,
        name:"Zoology",
        location:"Buildine-2, Floor-4"
      }
    ]
     return this.departments;
  }

  getAllDesignation(){
    this.designations=[
      {
        id:1,
      name:"Principal" 
    },
    {
      id:2,
      name:"Lecturer" 
    },
    {
      id:3,
      name:"Assistant Proffesor" 
    },
    {
      id:4,
      name:"Office Admin" 
    } 
  ]
  return this.designations;

  }

}
