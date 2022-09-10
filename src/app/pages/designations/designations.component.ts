import { Component, OnInit } from '@angular/core';
import {UtilityService} from 'src/app/utility.service'

@Component({
  selector: 'app-designations',
  templateUrl: './designations.component.html',
  styleUrls: ['./designations.component.css']
})
export class DesignationsComponent implements OnInit {

  constructor(private utilityService:UtilityService) { }

  ngOnInit(): void {
    this.designations=this.utilityService.getAllDesignation();
  }
  designations:any;
}
