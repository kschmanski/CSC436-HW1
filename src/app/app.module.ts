import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RequestComponent } from './request/request.component';
import {FormsModule} from "@angular/forms";
import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'about', component: AboutComponent},
  {path: 'request', component: RequestComponent},
  {path: '', pathMatch: 'full', redirectTo: 'home'}
];


@NgModule({
  declarations: [
    AppComponent,
    RequestComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
