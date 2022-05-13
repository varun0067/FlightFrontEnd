import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FlightService } from 'src/app/Services/Flight-Service/flight.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-flight',
  templateUrl: './edit-flight.component.html',
  styleUrls: ['./edit-flight.component.scss']
})
export class EditFlightComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute,private router:Router,private flightService:FlightService) { }

  flightNumber;
  flight;
  editFlightForm;
  airlines;

  ngOnInit(): void {
    this.flightNumber=this.activatedRoute.snapshot.paramMap.get("flightNumber");

    this.flight=this.flightService.getFlightByFlightNumber(this.flightNumber).subscribe(
      res=>{
        this.flight=res;
        console.log(res);
        this.updateEditFlight();
      }
    );

    this.airlines=this.flightService.getAllAirlines().subscribe(
      res=>{
        this.airlines=res;
      }
    )
    
  }

  updateEditFlight(){
    if(this.flight.departureTime.minutes==0)
      this.flight.departureTime.minutes="00";
    if(this.flight.departureTime.hours<10)
      this.flight.departureTime.hours="0"+this.flight.departureTime.hours; 
    var time=(this.flight.departureTime.hours+":"+this.flight.departureTime.minutes).toString();
    
    //console.log(time);
    
    this.editFlightForm  = new FormGroup({
      'flightNumber': new FormControl({value:this.flight.flightNumber,disabled:true},[Validators.required]),
      'airlineId': new FormControl({value:this.flight.airlineId,disabled:true},[Validators.required]),
      'departure': new FormControl({value:this.flight.departure,disabled:false},[Validators.required]),
      'destination': new FormControl({value:this.flight.destination,disabled:false},[Validators.required]),
      'departureTime': new FormControl({value:time,disabled:false},[Validators.required]),
      'startDate': new FormControl({value:(this.flight.startDate).slice(0,10),disabled:false},[Validators.required]),
      'endDate': new FormControl({value:(this.flight.endDate).slice(0,10),disabled:false},[Validators.required]),
      'scheduleDays': new FormControl({value:this.flight.scheduleDays,disabled:false},[Validators.required]),
      'instrumentUsed': new FormControl({value:this.flight.instrumentUsed,disabled:false},[Validators.required]),
      'numberOfBusinessClassSeats': new FormControl({value:this.flight.numberOfBusinessClassSeats,disabled:false},[Validators.required]),
      'numberOfEconomyClassSeats': new FormControl({value:this.flight.numberOfEconomyClassSeats,disabled:false},[Validators.required]),
      'ticketCost': new FormControl({value:this.flight.ticketCost,disabled:false},[Validators.required]),
      });

      

      console.log(this.editFlightForm.value);
  }

  editFlight()
  {
    this.editFlightForm.value.flightNumber=this.flight.flightNumber;
    
    //console.log(this.editFlightForm.value);
    
    this.editFlightForm.value.scheduleDays=parseInt(this.editFlightForm.value.scheduleDays);
    this.flightService.editFlight(this.editFlightForm.value).subscribe(
      res=>{
        if(res)
          alert("Flight Edited Successfully");
        else
          alert("Server Error please try again later");
        this.router.navigateByUrl("/admin-dashboard");
      }
    )
  }

}
