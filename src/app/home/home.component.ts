import {Component,OnInit} from '@angular/core';
import {MyFirstServiceClass} from '../data.services';
import { Observable } from 'rxjs';

@Component(
    {
        selector:'app-home',
        templateUrl:'./home.component.html'
       
    }
)

export class HomeComponent implements OnInit {
    txt1:string='akshi';
    txt2="";
    data:string='';

    constructor(private _exampleService:MyFirstServiceClass) {}

    ngOnInit(){
     this.txt2 = this._exampleService.username;
     console.log("username = "+ this._exampleService.username);
    }

   
   
   
}