import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PeopleModel } from './people.model';
import { PeopleService } from './people.service';

@Component({
  moduleId: module.id,
  selector: 'app-model-list',
  templateUrl: 'model-list.component.html',
  styleUrls: ['model-list.component.css']
})
export class ModelListComponent implements OnInit {

  public people: PeopleModel[] = [];
  constructor(
    private peopleSvc: PeopleService,
    private router: Router) { }

  ngOnInit() {
    this.peopleSvc.getPeople().forEach(res => this.people = res);
  }

  toPerson(person: PeopleModel) {
    this.router.navigate(['/models', person.id])
  }
}
