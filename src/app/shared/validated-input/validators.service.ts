import { Injectable, Inject, forwardRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import { PeopleModel } from './../../model-list';

const requiredMessage = 'This field is required';
const passwordMatchMessage = 'Passwords do not match';
const invalidEmailMessage = 'Not a valid email';
const invalidPassword = 'Password is not valid';


@Injectable()
export class CustomValidatorsService {

    private errorMessage: string[];

    constructor(private http: Http) { }

    required(control: FormControl) {
        let regex = new RegExp('(^$)');
        return !regex.test(control.value) ? null : { 'required': true };
    }

    validatePasswordsMatch(group: FormGroup) {
        return group.controls['pass'].value === group.controls['passMatch'].value ? null : { 'passwordMatch': true };
    }

    passwordIsValid(group: FormGroup) {
        return group.controls['pass'].valid ? null : { 'invalidPassword': true };
    }

    containsUpperCase(control: FormControl) {
        let regex = new RegExp('(?=.*?[A-Z])');
        return regex.test(control.value) ? null : { 'containsUpperCase': true };
    }

    containsLowerCase(control: FormControl) {
        let regex = new RegExp('(?=.*?[a-z])');
        return regex.test(control.value) ? null : { 'containsLowerCase': true };
    }

    containsSpecial(control: FormControl) {
        let regex = new RegExp('(?=.*?[#?!@$%^&*-])');
        return regex.test(control.value) ? null : { 'containsSpecial': true };
    }

    passwordValidator() {
        return Validators.compose(
            [Validators.required,
                Validators.minLength(8),
                this.containsLowerCase,
                this.containsUpperCase,
                this.containsSpecial]);
    }

    validateEmail(control: FormControl) {
        let regex = new RegExp('([a-z0-9._%+-])+@([a-z0-9.-])+.([a-z])');
        return regex.test(control.value) ? null : { 'validateEmail': true };
    }

    validateEmailIsUnqiue(control: FormControl): Observable<{ [key: string]: any }> {
        console.log(control);
        let email = control.value;
        console.log(email);
        return this.http.get('./../../assets/people.json')
            .map(res => {
                let people = <PeopleModel[]>res.json().find;
                let person = people.find(item => item.email === email);

                if (person == null) {
                    return Observable.from([null]);
                } else {
                    return Observable.from([{ 'emailUnique': true }]);
                }
            });
    }

    buildErrorMessages(control: FormControl, formGroup: FormGroup) {

        this.errorMessage = [];
        this.buildControlErrorMessages(control);
        if (formGroup != null) {
            this.buildFormErrorMessages(formGroup);
        }
        return this.errorMessage;
    }

    buildControlErrorMessages(control: FormControl) {

        if (control.hasError('required')) {
            this.errorMessage.push(requiredMessage);
        }

        if (control.hasError('passwordMatch')) {
            this.errorMessage.push(passwordMatchMessage);
        }

        if (control.hasError('validateEmail')) {
            this.errorMessage.push(invalidEmailMessage);
        }
    }

    buildFormErrorMessages(formGroup: FormGroup) {
        if (formGroup.hasError('passwordMatch')) {
            this.errorMessage.push(passwordMatchMessage);
        }

        if (formGroup.hasError('invalidPassword')) {
            this.errorMessage.push(invalidPassword);
        }
    }
}