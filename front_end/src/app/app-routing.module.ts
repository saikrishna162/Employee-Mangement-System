import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RouteGuardService } from './service/route-guard.service';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';

const routes: Routes = [
  { path: '', component:LoginComponent},
  { path: 'login', component: LoginComponent},

  { path:'employees', component:EmployeeListComponent, canActivate:[RouteGuardService]},
  { path: 'create-employee', component: CreateEmployeeComponent, canActivate:[RouteGuardService]},
  { path: 'update-employee/:id', component: UpdateEmployeeComponent, canActivate:[RouteGuardService]},
  { path: 'employee-details/:id', component: EmployeeDetailsComponent, canActivate:[RouteGuardService]},
  { path: 'logout', component:LogoutComponent, canActivate:[RouteGuardService]},
  
  { path: '**', component : ErrorComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)], //calling routemodule
  exports: [RouterModule]
})
export class AppRoutingModule { }
