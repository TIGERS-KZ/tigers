import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService) {}

  onSubmit() {
    this.authService.authenticateUser([this.username, this.password]).subscribe(
      (response) => {
        // Set the currentUser object
        this.authService.setCurrentUser(response.user);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
