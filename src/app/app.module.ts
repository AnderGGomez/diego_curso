import { Input, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import { GokuComponent } from './goku/goku.component';
import { GohanComponent } from './gohan/gohan.component';
import { GotenComponent } from './goten/goten.component';

@NgModule({
  declarations: [
    AppComponent,
    GokuComponent,
    GohanComponent,
    GotenComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    /**Inportamos el modulo de formularios */
    FormsModule,
    InputTextModule,
    ButtonModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
