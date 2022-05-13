import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FlightService } from 'src/app/Services/Flight-Service/flight.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-flight',
  templateUrl: './add-flight.component.html',
  styleUrls: ['./add-flight.component.scss']
})
export class AddFlightComponent implements OnInit {

  constructor(private flightService:FlightService,private router:Router) { }

  airlines;
  addFlightForm:FormGroup;
  ngOnInit(): void {
    this.addFlightForm  = new FormGroup({
      'flightNumber': new FormControl('',[Validators.required]),
      'airlineId': new FormControl('',[Validators.required]),
      'departure': new FormControl('',[Validators.required]),
      'destination': new FormControl('',[Validators.required]),
      'departureTime': new FormControl('',[Validators.required]),
      'startDate': new FormControl('',[Validators.required]),
      'endDate': new FormControl('',[Validators.required]),
      'scheduleDays': new FormControl('',[Validators.required]),
      'instrumentUsed': new FormControl('',[Validators.required]),
      'numberOfBusinessClassSeats': new FormControl('',[Validators.required]),
      'numberOfEconomyClassSeats': new FormControl('',[Validators.required]),
      'ticketCost': new FormControl('',[Validators.required]),
      });

      this.airlines=this.flightService.getAllAirlines().subscribe(
        res=>{
          this.airlines=res;
        }
      )
  }

  addFlight(){
    console.log(this.addFlightForm.value);

    this.addFlightForm.value.scheduleDays=parseInt(this.addFlightForm.value.scheduleDays);
    
    this.flightService.addFlight(this.addFlightForm.value).subscribe(
      res=>{
        if(res)
          alert("Flight added successfully");
        else
          alert("Some Error please try again later");
        this.router.navigateByUrl("/admin-dashboard");
      }
    )
  }

}
