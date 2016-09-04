import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoPageComponent } from './demo-page';
import { ValidatedInputComponent, CustomValidatorsService } from './validated-input';

@NgModule({
    imports: [CommonModule],
    exports: [
        DemoPageComponent,
        ValidatedInputComponent
    ],
    declarations: [
        DemoPageComponent,
        ValidatedInputComponent
    ],
    providers: [
        CustomValidatorsService
    ]
})
export class SharedModule { }
