import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../Services/Auth-Service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(private router:Router,private authService:AuthService){

    }

  canActivate():boolean{
    if(this.authService.LoggedIn()){
      return true;
    }
    else{
      alert("Please login!!");
      this.router.navigateByUrl("");
      return false;
    }
  }
  
}
