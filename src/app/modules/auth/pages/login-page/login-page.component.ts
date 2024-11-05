import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '@modules/auth/services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit{
  errorSession: Boolean = false
  loginForm: FormGroup = new FormGroup ({})
  isRegister: Boolean = false; 

  constructor(private authService: AuthService, private router: Router, private cookie: CookieService, private fb: FormBuilder) {

  }

  ngOnInit(): void {
    
  }

  onLogin(form: FormGroup) {
    if (form) {
      const { email, password } = form.value;
      this.authService.login(email, password)
        .subscribe(responseOk => {
          const { idToken } = responseOk;
          this.cookie.set('token', idToken, 15/(24*60), '/');
          this.router.navigate(['/','recipes']);
        }, error => {
          this.errorSession = true;
          alert('Incorrect email or password!')
        });
    }
  }
}
