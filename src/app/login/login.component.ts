import { Component,OnInit,Output,EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {MyFirstServiceClass} from '../data.services';

//import {HomeComponent} from './home/home.component';
// import { link } from 'fs';
// import { homedir } from 'os';


@Component({
  selector: 'login-root',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
//   styleUrls: ['./app.component.css']
})
export class LoginComponent {
  
  pass:string='password'
  txt1:string='akshi'
  data: any;
 
  constructor(private router: Router,private _exampleService:MyFirstServiceClass) { }
   

  submit(uname,pwd)
  {
    if(uname==''||pwd=='')
    {
      alert('username and password required');
    }
    if(pwd=="p"){
   this._exampleService.username = uname;
   this.router.navigate(['./home']);}
  }
}
