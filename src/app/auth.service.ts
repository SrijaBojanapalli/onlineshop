import { Injectable } from '@angular/core';
import { LogincomponrntComponent } from './logincomponrnt/logincomponrnt.component';
import * as firebase  from 'firebase';
import {Observable} from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import { ActivatedRoute } from '@angular/router';

@Injectable()
export class AuthService {
  user$:Observable<firebase.User>;

  constructor(private afAuth:AngularFireAuth,private route:ActivatedRoute) { 
    this.user$=afAuth.authState;
    

}
login(){
 let returnUrl= this.route.snapshot.queryParamMap.get('returnUrl')||'/';
  this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }


logout(){
  this.afAuth.auth.signOut();

}
}
