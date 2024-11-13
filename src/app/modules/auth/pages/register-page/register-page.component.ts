import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AuthService } from '@modules/auth/services/auth.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {
  errorSession: Boolean = false
  registerForm: FormGroup = new FormGroup ({})
  isRegister:boolean = true;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    
  }

  onRegister(form: FormGroup): void {
    const { email, password } = form.value
    this.authService.register(email, password,)
    .subscribe(() => {
      alert('You have successfully registered, please login!')
      this.router.navigate(['/auth/login']);
    }, error => {
      this.errorSession = true
      console.log('⚠️Error, something was wrong!⚠️')
    })
  }  
}
