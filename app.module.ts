import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './component/footer/footer.component';
import { HomeComponent } from "./component/home/home.component";
import {NavbarComponent  } from "./component/navbar/navbar.component";
import { Navbar2Component } from './component/navbar2/navbar2.component';
import { ProfileComponent } from './component/profile/profile.component';
import  { HttpClientModule } from '@angular/common/http'
import { RepoComponent } from "./component/repo/repo.component";

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        NavbarComponent,
        Navbar2Component,
        ProfileComponent,
        FooterComponent,
        RepoComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        HttpClientModule,
        BrowserModule,
        AppRoutingModule,
        NgxPaginationModule,
        
        
    ]
})
export class AppModule { }
