import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormControl, NG_VALIDATORS } from'@angular/forms';

@Component({
    selector: 'password-input',
    templateUrl: 'password-input.component.html',
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => PasswordInputComponent),
            multi: true
        },
        {
            provide: NG_VALIDATORS,
            useExisting: forwardRef(() => PasswordInputComponent),
            useValue: (formControl) => { },
            multi: true
        }]
})
export class PasswordInputComponent implements ControlValueAccessor {

    private _value: any = '';
    private _control: any;
    propagateChange: any = () => { };
    validateFn: any = () => { };

    get value(): any { return this._value; };

    get control(): any { return this._control; };

    set value(v: any) {
        if (v !== this._value) {
            this._value = v;
            this.onChange(v);
        }
    }

    writeValue(value: any) {
        this._value = value;
        this.onChange(value);
    }

    validate(c: FormControl) {
        this._control = c;
        return this.validateFn(c);
    }

    onChange = (_) => { };
    onTouched = () => { };
    registerOnChange(fn: (_: any) => void): void { this.onChange = fn; }
    registerOnTouched(fn: () => void): void { this.onTouched = fn; }
}
