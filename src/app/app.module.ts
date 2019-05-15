import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { AboutComponent } from './about.component';
import { HeaderComponent } from './header.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { customFilter } from './customFilter';
import { uppercaseFilter } from './customFilter';

const app : Routes = [
  {
    path : 'home',component : HomeComponent
  },
  {
    path : 'about',children:[
      {
        path : ':id',component : HomeComponent
      }
    ]
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    HeaderComponent,
    customFilter,
    uppercaseFilter
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(app),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
