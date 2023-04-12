import { Component } from '@angular/core';
import { HardcodedAuthenticationService } from './service/hardcoded-authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Employee Management System';
  isUserLoggedIn : boolean = false;

  constructor (public hardcodedAuthenticationService : HardcodedAuthenticationService){ }

  ngOnInit(){
    this.isUserLoggedIn = this.hardcodedAuthenticationService.isUserLoggedIn();
  }
}
