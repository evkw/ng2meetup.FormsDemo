import { NgModule }      from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { SharedModule } from './shared';
import { AppComponent } from './app.component';
import { appRoutingModule } from './app.routing';
import { LoginComponent } from './login';
import { SignupComponent } from './signup';
import { ModelListComponent, PeopleService } from './model-list';
import { ModelDetailComponent, PersonResolver } from './model-detail';

@NgModule({
  imports:
  [
    BrowserModule,
    CommonModule,
    HttpModule,
    ReactiveFormsModule,
    // Routing
    appRoutingModule,
    // Shared Functionality
    SharedModule
  ],
  declarations:
  [
    AppComponent,
    LoginComponent,
    SignupComponent,
    ModelListComponent,
    ModelDetailComponent
  ],
  providers: [
    PeopleService,
    PersonResolver
  ],
  bootstrap:
  [
    AppComponent
  ]
})
export class AppModule { }
