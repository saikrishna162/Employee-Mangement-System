import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
  
})
export class CreateEmployeeComponent implements OnInit {
  private baseURL = "http://localhost:8080/api/employees"
  employee: Employee = new Employee()
  

  constructor(private employeeService: EmployeeService,
    private router: Router,
    private http:HttpClient
  ) { }

  ngOnInit(): void {
  
  }
  saveEmployee(){

    this.http.post(this.baseURL, this.employee).toPromise().then((temp : any)=> {
    
    console.log(temp);
    
    this.goToEmployeeList();
    
    },
    
    error => console.log(error));
    
     }
  

  // saveEmployee() {
  //   this.employeeService.createEmployee(this.employee).subscribe(data => {
  //     console.log(data);
  //     this.goToEmployeeList();
  //   },
  //     error => console.log(error));
  // }

  goToEmployeeList() {
    this.router.navigate([`/employees`]);
  }

  onSubmit() {
    console.log(this.employee);
    this.saveEmployee();
  }
}
