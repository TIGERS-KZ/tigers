import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { User, UserImpl } from '../user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent { 
  username: string = '';
  email: string = '';
  password: string = '';
  user: User = new UserImpl(this.username, this.password, this.email);

  constructor(private authService: AuthService) {}
  
  onSubmit() {
    console.log("Username: ${this.username}, Email: ${this.email}, Password: ${this.password}");
  
    this.authService.register(this.user);
    
  }
}
