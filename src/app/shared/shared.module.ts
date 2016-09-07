import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DemoPageComponent } from './demo-page';
import { ValidatedInputComponent, CustomValidatorsService } from './validated-input';
import { PasswordInputComponent } from './password-input';

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    exports: [
        DemoPageComponent,
        ValidatedInputComponent,
        PasswordInputComponent
    ],
    declarations: [
        DemoPageComponent,
        ValidatedInputComponent,
        PasswordInputComponent
    ],
    providers: [
        CustomValidatorsService
    ]
})
export class SharedModule { }
