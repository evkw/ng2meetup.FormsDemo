import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  moduleId: module.id,
  selector: 'password-validator',
  templateUrl: 'password.component.html'
})
export class PasswordComponent {

  @Input() control: FormControl = new FormControl();

}