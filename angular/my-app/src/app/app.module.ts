import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import {HttpClientModule} from "@angular/common/http";
import { AppComponent } from './app.component';
import { ShowDataComponent } from './show-data/show-data.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from "./app.router";
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { NotesComponent } from './notes/notes.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowDataComponent,
    HomeComponent,
    SignupComponent,
    NotesComponent,
    HeaderComponent,
  ],
  imports: [
    HttpModule,
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
