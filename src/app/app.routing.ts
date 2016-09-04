import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login';
import { SignupComponent } from './signup';
import { ModelListComponent } from './model-list';
import { ModelDetailComponent, PersonResolver } from './model-detail';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'signup',
        component: SignupComponent
    },
    {
        path: 'models',
        component: ModelListComponent
    },
    {
        path: 'models/:id',
        resolve: { person: PersonResolver},
        component: ModelDetailComponent
    }
];

export const appRoutingModule = RouterModule.forRoot(appRoutes);