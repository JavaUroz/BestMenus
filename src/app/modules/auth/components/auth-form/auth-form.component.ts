import { Component, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.css']
})
export class AuthFormComponent {
  @Input() isRegister: boolean = false;
  @Output() formSubmitted = new EventEmitter<FormGroup>();

  authForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.authForm = this.fb.group({
      email: new FormControl('', [
        Validators.required,
        Validators.email,
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(12)
      ])
    })
    if (this.isRegister) {
      this.authForm.addControl('confirmPassword', this.fb.control('', [Validators.required]));
    }
  }
  
  onSubmit() {
    if (this.authForm.valid) {
      this.formSubmitted.emit(this.authForm);
    }
  }
}
