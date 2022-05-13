import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FlightService } from 'src/app/Services/Flight-Service/flight.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss']
})
export class UserDashboardComponent implements OnInit {

  constructor(private flightService:FlightService,private router:Router) { }

  flights;
  airlines;
  airlineName;
  searchFlightForm:FormGroup;
  airlineSearch:boolean=false;
  today = new Date();
  ngOnInit(): void {

    this.searchFlightForm  = new FormGroup({
      'departureDate': new FormControl('',[Validators.required]),
      'returnDate': new FormControl(''),
      'from': new FormControl('',[Validators.required]),
      'to': new FormControl('',[Validators.required]),
      'tripType': new FormControl('')
      });

      this.flightService.getAllAirlines().subscribe(
        res=>{
          this.airlines=res;
          this.airlineSearch=true;
          //console.log(res);
        }
      )
  }

  getAirlineName(id):string{

    if(this.airlineSearch && this.displaySearch)
    {
      this.airlines.forEach(element => {
        //console.log(element.airlineId);
        if(element.id==id)
        {
          this.airlineName=element.airlineName;
        }
      });
      //console.log(this.airlineName);
      return this.airlineName;//this.airlines.find(a=>a.airlineId==id).airlineName;
    }
  }

  // changeDepartureToText()
  // {
  //   var control=document.getElementById("departureDate").
  // }

  displaySearch:boolean=false;
  searchFlight(){
    //console.log(this.searchFlightForm.value);
    if(this.searchFlightForm.value.returnDate!="")
      this.searchFlightForm.value.tripType=1;
    else
      this.searchFlightForm.value.tripType=0;

    this.searchFlightForm.value.returnDate=this.searchFlightForm.value.departureDate;
    this.flightService.searchFlight(this.searchFlightForm.value).subscribe(
      res=>{
        this.flights=res;
        this.displaySearch=true;
        //console.log(res);
      }
    )
  }

  bookTicket(flightNumber,airline){
    this.router.navigateByUrl("/book-ticket/"+flightNumber+"/"+this.searchFlightForm.value.departureDate+"/"+airline);
  }

}
