import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

// class Employee{
//   constructor(
//     id: number,
//     firstName: string,
//     lastName: string,
//     emailId: string,
//     mobNo: string,
//   ){}
  
//   }
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees : Employee[];
  //employees=[];
  private baseUrl="http://localhost:8080/api/employees"
  constructor(private employeeService:EmployeeService,
      private router: Router,
      private httpClient:HttpClient
    ) { }

  ngOnInit():void {
    this.getEmployees();
  }
  
  private getEmployees(){
    this.employeeService.getEmployeeList().subscribe( data => {
        this.employees = data;
      });
  }
  //getEmployees() {

  //   const promise = new Promise<void>((resolve, reject) => {
  //   const baseURL = this.baseUrl;
  //   this.httpClient.get<Employee[]>(baseURL).subscribe({
  //   next: (res: any) => {
  //   this.emp = res.map((res: any) => {
  //   return new Employee(res.firstName, res.lastName, res.emailId, res.mobNo);
  //   });
    
  //   resolve();
  //   },
  //   error: (err: any) => {
  //   reject(err);
  //   },
  //   complete: () => {
  //   console.log('complete');
  //   },
  //   });
  //   });
  //   return promise;
  //   }
  

  updateEmployee(id : number){
    this.router.navigate(['update-employee', id])
  }

  deleteEmployee(id:number){
    this.employeeService.deleteEmployee(id).subscribe( data => {
      console.log(data);
      this.getEmployees();
    });
  }

  employeeDetails(id:number){
    this.router.navigate(['employee-details',id]);
  }

}
