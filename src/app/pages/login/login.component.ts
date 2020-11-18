import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email = "";
  password = "";
  message = '';
  errorMessage = '';
  error: { name: string, message: string } = { name: '', message: '' }

  constructor(private authservice: AuthService, private router: Router) { }

  ngOnInit(): void { }

  clearErrorMessage() {
    this.errorMessage = '';
    this.error = { name: '', message: '' };
  }

  login() {
    this.clearErrorMessage();
    this.authservice.loginWithEmail(this.email, this.password)
      .then(() => {
        this.router.navigate(['/news']);
      }).catch(_error => {
        this.error = _error;
        this.router.navigate(['/login']);
      })
  }
}
