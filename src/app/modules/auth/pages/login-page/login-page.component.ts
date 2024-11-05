import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AuthService } from '@modules/auth/services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  errorSession: Boolean = false
  loginForm: FormGroup = new FormGroup ({})

  constructor(private authService: AuthService, private router: Router, private cookie: CookieService) {

  }

  onLogin():void{ 
    const { email, password } = this.loginForm.value
    this.authService.login(email, password)
    .subscribe(responseOk => {
      const {idToken, data} = responseOk
      this.cookie.set('token', idToken, 1, '/')
      this.router.navigate(['/','recipes'])

      console.log(idToken)
    }, error => {
      this.errorSession = true
      console.log('⚠️Error de login!⚠️')
    })
  }  
}
