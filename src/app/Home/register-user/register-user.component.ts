import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { AuthService } from 'src/app/Services/Auth-Service/auth.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss']
})
export class RegisterUserComponent implements OnInit {

  constructor(private router:Router,private authService:AuthService) { }

  registrationForm:FormGroup;
  Usernames:string[];
  ngOnInit(): void {
      //initializing validations
      this.registrationForm  = new FormGroup({
      'name': new FormControl('',[Validators.required,Validators.pattern(/^[a-z ]+$/i)]),
      'email': new FormControl('',[Validators.required,Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i)]),
      'mobile': new FormControl('',[Validators.required,Validators.pattern(/^[6-9][0-9]{9}$/i)]),
      'gender': new FormControl('',[Validators.required]),
      'age': new FormControl('',[Validators.required]),
      'password': new FormControl('',[Validators.required,Validators.minLength(6)]),
      'confirmPassword': new FormControl('',[Validators.required,Validators.minLength(6)]),
      'admin': new FormControl(false)
  });

  }




  
  registrationSuccess=false;
  newaccount:Account;

  //onSubmit Register
  register() {
    
    //console.log(this.registrationForm.value);
  
      this.authService.Register(this.registrationForm.value).subscribe(res=>{
        if(res){
          this.registrationSuccess=true; 
        }
        else{
        }
        this.registrationForm.reset();  
        this.router.navigateByUrl("/registration");
      });

      
    }

}
