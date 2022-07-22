import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  inputUserName:string="admink";    dbUserName:string="admin"
  inputPassword:string="admin123"; dbPassword:string ="admin123"

  isUserLoggedIn(){
    if((this.inputUserName===this.dbUserName) && (this.inputPassword === this.dbPassword)){
      return true
    }
    else{
      alert("you are not elegible for access this page")
      return false;
    }
  }
}
