import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

import { PeopleModel } from '../model-list';

@Component({
  moduleId: module.id,
  selector: 'app-model-detail',
  templateUrl: 'model-detail.component.html',
  styleUrls: ['model-detail.component.css']
})
export class ModelDetailComponent implements OnInit {

  public person: PeopleModel
  public personForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder) {

    this.personForm = this.fb.group({
      id: [''],
      first_name: [''],
      last_name: [''],
      email: [''],
      gender: [''],
      description: ['']
    })

    route.data.forEach(d => {
      this.person = d['person'];
    })

    this.personForm.patchValue(this.person);
  }

  ngOnInit() {
  }

}
