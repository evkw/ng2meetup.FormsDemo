import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { CustomValidatorsService } from '../shared';

@Component({
  moduleId: module.id,
  selector: 'app-signup',
  templateUrl: 'signup.component.html'
})
export class SignupComponent {

  public signUpForm: FormGroup;
  public showPassHelp: boolean = false;

  constructor(
    private fb: FormBuilder,
    private svc: CustomValidatorsService) {

    this.signUpForm = this.fb.group({
      name: ['', this.svc.required],
      email: ['', Validators.compose([this.svc.required, this.svc.validateEmail])],
      passwords:

      fb.group({
        pass: ['', Validators.compose(
          [Validators.required,
            Validators.minLength(8),
            this.svc.containsLowerCase,
            this.svc.containsUpperCase,
            this.svc.containsSpecial])],
        passMatch: ['', Validators.required],
      }, { validator: Validators.compose([this.svc.validatePasswordsMatch, this.svc.passwordIsValid]) })

    });
  }
}
