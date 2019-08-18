import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {HomeComponent} from './home/home.component';
// import { link } from 'fs';
// import { homedir } from 'os';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'app3';
  constructor(private router: Router) { 
    this.router.navigate(['./login']);
  }

  
}
//   pass:string='password'

//   constructor(private router: Router) { }

//   show(data)
//   {console.log(this.pass);
//     console.log(data);
   
//     if (this.pass==data)
//     {
      
//       this.router.navigate(['./home']);
//       // location.href('/home');
   
//       // this.router.Navigate[(/home)];
//     }
//   }
// }
