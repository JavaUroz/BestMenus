import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '@modules/auth/services/auth.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {
  errorSession: Boolean = false
  loginForm: FormGroup = new FormGroup ({})

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router, private cookie: CookieService) {}

  ngOnInit(): void {

    this.loginForm = new FormGroup(
      {
        email: new FormControl('', [
          Validators.required,
          Validators.email,
        ]),
        password: new FormControl('', [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(12)
        ])
      }
    )
  }

  onSubmit():void{ 
    const { email, password } = this.loginForm.value
    this.authService.register(email, password)
    .subscribe(responseOk => {
      const {idToken, data} = responseOk
      this.cookie.set('token', idToken, 1, '/')
      this.router.navigate(['/','auth/login'])

      console.log(idToken)
    }, error => {
      this.errorSession = true
      console.log('⚠️Error de login!⚠️')
    })
  }  
}
