import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  email = "";
  password = "";
  confirm_password = ""
  message = '';
  errorMessage = '';
  error: { name: string, message: string } = { name: '', message: '' }

  constructor(private authservice: AuthService, private router: Router) { }
  ngOnInit(): void { }

  clearErrorMessage() {
    this.errorMessage = '';
    this.error = { name: '', message: '' };
  }

  register() {
    this.clearErrorMessage();
    if (this.validateForm(this.email, this.password)) {
      this.authservice.registerWithEmail(this.email, this.password)
        .then(() => {
          this.message = "you are register with data on firbase";
          this.router.navigate(['/login']);
        }).catch(_error => {
          this.error = _error;
          this.router.navigate(['/register']);
        })
    }
  }

  validateForm(email, password) {
    if (password.lenght < 6) {
      this.errorMessage = "password should be at least 8 char";
      return false;
    }

    if (this.password === this.confirm_password) {
      this.errorMessage = '';
      return true;
    } else {
      this.errorMessage = "Passwords do not match";
      return false;
    }
  }
}
