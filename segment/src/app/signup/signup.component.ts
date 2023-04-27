import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { User, UserImpl } from '../models/user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent { 
  username: string = '';
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService) {}
  
  onSubmit() {
    console.log("Username: ${this.username}, Email: ${this.email}, Password: ${this.password}");
  
    this.authService.register(new UserImpl(this.username, this.password, this.email));
    
  }
}
