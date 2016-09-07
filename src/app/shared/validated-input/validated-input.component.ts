import { Component, Input, DoCheck } from '@angular/core';
import { NgClass } from '@angular/common';
import { FormControl, FormGroup } from '@angular/forms';

import { CustomValidatorsService } from './validators.service';

@Component({
    moduleId: module.id,
    selector: 'validated-input',
    templateUrl: 'validated-input.component.html',
    directives: [NgClass]
})
export class ValidatedInputComponent implements DoCheck {
    @Input() control: FormControl = new FormControl();
    @Input() formGroup: FormGroup = null;
    private errorMessages: string[] = [];
    private isValid: boolean;

    constructor(private svc: CustomValidatorsService) { }

    ngDoCheck() {
         this.errorMessages = this.svc.buildErrorMessages(this.control, this.formGroup);
         this.isValid = this.errorMessages.length === 0;
    }
}
