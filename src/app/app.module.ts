import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import { FormsModule } from '@angular/forms';
import {LoginComponent} from './login/login.component';
import { MyFirstServiceClass } from './data.services';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

const appRoutes:Routes=[
  {path:'home',component:HomeComponent},
{path:'login',component:LoginComponent}
  
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [MyFirstServiceClass],
  bootstrap: [AppComponent]
})
export class AppModule { }
