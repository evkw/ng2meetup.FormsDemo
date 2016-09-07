import { Inject, forwardRef } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { PeopleModel, PeopleService } from '../model-list'
import { Observable } from 'rxjs';

export class PersonResolver implements Resolve<PeopleModel> {
    constructor(@Inject(forwardRef(() => PeopleService))private svc: PeopleService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<PeopleModel> {
        let peopleId = route.params['id'];
        return this.svc.getPerson(peopleId);
    }
}
