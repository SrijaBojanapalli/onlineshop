import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-logincomponrnt',
  templateUrl: './logincomponrnt.component.html',
  styleUrls: ['./logincomponrnt.component.css']
})
export class LogincomponrntComponent  {

  constructor(private auth:AuthService) {
    
   }

  
  
  login()
  {
      this.auth.login();
  }

}
