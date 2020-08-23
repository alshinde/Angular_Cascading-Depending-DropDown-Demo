import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { Employee } from './employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employee=new Employee();
  countryArray:any;
   stateArray:any;
  cityArray:any;

  constructor(private dataService:DataService) { }

  
  ngOnInit(): void {
    this.getCountry();
  }


  getCountry(){
    this.countryArray=this.dataService.getCountry();
  }
  
  getState($event){
    this.stateArray=this.dataService.getstate($event.target.value);
  }

  getCity($event){
    this.cityArray=this.dataService.getcity($event.target.value);
  }
  

}
