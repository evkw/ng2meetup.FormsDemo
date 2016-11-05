import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';

import { PeopleModel } from './people.model';
import 'rxjs/add/operator/map';

@Injectable()
export class PeopleService {

  constructor(private http: Http) { }

  getPeople(): Observable<PeopleModel[]> {
    return this.http.get('./../../assets/people.json')
      .map(res => <PeopleModel[]>res.json());
  }

  getPerson(id: number): Observable<PeopleModel> {
    return this.http.get('./../../assets/people.json')
      .map(res => {
        let people = <PeopleModel[]>res.json();
        return people.find(item => item.id == id);
      });
  }
}
