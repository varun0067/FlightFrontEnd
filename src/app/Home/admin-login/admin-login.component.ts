import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/Services/Auth-Service/auth.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {

  invalidCredentials=false;
  loginForm: FormGroup;
  
  constructor(private router:Router,private authService:AuthService) {
   }

  ngOnInit() {
      //initializing validators
      this.loginForm  = new FormGroup({
      'email': new FormControl('',[Validators.required]),
      'password': new FormControl('',[Validators.required]),
      'admin': new FormControl(true)
      });

      
  }

  //To show and hide password field
  // showPassword()
  // {
  //   var id='password';
  //   var visible= <HTMLInputElement>document.getElementById(id);
  //   visible.type=="text"?visible.type="password":visible.type="text";
  // }

  account:any;

  //onSubmit event login
  login() {

    //console.log(this.loginForm.value);
    
    this.authService.Login(this.loginForm.value)
    .subscribe(success=>{
      if(!success){
        this.invalidCredentials = true;
        this.router.navigateByUrl("/admin-login");
      }
      else{
        this.router.navigateByUrl("/admin-dashboard");
      }
    });

    }

}
