import { Component, OnInit, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'demo-page',
    templateUrl: 'demo-page.component.html',
    styleUrls: ['demo-page.component.css']
})
export class DemoPageComponent { 
    @Input() title: string;
    @Input() containerSmall: boolean = false;
}