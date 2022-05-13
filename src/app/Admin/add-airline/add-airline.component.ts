import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FlightService } from 'src/app/Services/Flight-Service/flight.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-airline',
  templateUrl: './add-airline.component.html',
  styleUrls: ['./add-airline.component.scss']
})
export class AddAirlineComponent implements OnInit {

  addAirlineForm:FormGroup;

  constructor(private flightService:FlightService,private router:Router) { }

  ngOnInit(): void {
    this.addAirlineForm  = new FormGroup({
      'airlineName': new FormControl('',[Validators.required]),
      'isActive': new FormControl('',[Validators.required]),
      });
  }

  addAirline(){

    
    if(this.addAirlineForm.value.isActive=="active")
      this.addAirlineForm.value.isActive=true;
    else
      this.addAirlineForm.value.isActive=false;

    this.flightService.addAirline(this.addAirlineForm.value)
    .subscribe(success=>{
      if(success)
        {
          alert("Airline added succesfully");
        }
        else{
          alert("Some Error please try again later");
        }
        this.router.navigateByUrl("/admin-dashboard");
    }
    );
  }

}
