import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { catchError, mapTo,tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient,private router:Router) { }

  //register user
  Register(user){
    return this.http.post<any>(environment.AuthURL+'user/register',user)
    .pipe(
      mapTo(true),
      catchError(error=>{
        alert(error.error);
        return of(false);
      })
    );
  }

  //Check Login
  Login(loginDetails)
  {

    return this.http.post<any>(environment.AuthURL+'login',loginDetails)
    .pipe(
      tap(token=>this.setLoginUser(token.emailId,token.token)),
      mapTo(true),
      catchError(error=>{
        return of(false);
      })
    );
  }

  //setting session storage after successful login 
  setLoginUser(email:string,token:string)
  {
    sessionStorage.setItem("email",email);
    sessionStorage.setItem("jwt",token);
  }

  //checking login
  LoggedIn()
  {
    return !!(sessionStorage.getItem("email")&&sessionStorage.getItem("jwt"));
  }

  //logout
  logout()
  {
    sessionStorage.removeItem("email");
    sessionStorage.removeItem("jwt");
    this.router.navigateByUrl("/");
  }
}
