import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatDialogModule} from "@angular/material/dialog";
import {MatSelectModule} from "@angular/material/select";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {JwtInterceptor} from "./interceptors/jwt-interceptor";
import {CustomDirectivesModule} from "./directives/directives.module";
import { DashboardComponent } from './dashboard/dashboard.component';
import { Error404Component } from './error404/error404.component';
import {MatMenuModule} from "@angular/material/menu";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatSidenavModule} from "@angular/material/sidenav";

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    Error404Component
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        MatButtonToggleModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatDialogModule,
        MatSelectModule,
        ReactiveFormsModule,
        CustomDirectivesModule,
        FormsModule,
        MatMenuModule,
        MatSlideToggleModule,
        MatSidenavModule
    ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
