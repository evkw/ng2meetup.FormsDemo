import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  moduleId: module.id,
  selector: 'app-login',
  templateUrl: 'login.component.html'
})
export class LoginComponent {

  public loginForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.loginForm = fb.group({
      email: [''],
      password: ['']
    })
  }

  login() {
    window.alert('Welcome to the demo!');
  }

  reset() {
    this.loginForm.reset();
  }
}
