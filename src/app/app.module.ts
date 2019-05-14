import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { AboutComponent } from './about.component';
import { HeaderComponent } from './header.component';
import { RouterModule, Routes } from '@angular/router';

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
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(app)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
