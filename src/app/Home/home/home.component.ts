import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/Auth-Service/auth.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  invalidCredentials=false;
  loginForm: FormGroup;
  
  constructor(private router:Router,private authService:AuthService) {
   }

  ngOnInit() {
      //initializing validators
      this.loginForm  = new FormGroup({
      'email': new FormControl('',[Validators.required]),
      'password': new FormControl('',[Validators.required]),
      'admin': new FormControl(false)
      });
      
  }

  //To show and hide password field
  // showPassword()
  // {
  //   var id='password';
  //   var visible= <HTMLInputElement>document.getElementById(id);
  //   visible.type=="text"?visible.type="password":visible.type="text";
  // }

  //onSubmit event login
  login() {

    //console.log(this.loginForm.value);
    this.authService.Login(this.loginForm.value)
    .subscribe(success=>{
      if(!success){
        this.invalidCredentials = true;
        this.router.navigateByUrl("/");
      }
      else{
        this.router.navigateByUrl("/user-dashboard");
      }
    });

    }

}
