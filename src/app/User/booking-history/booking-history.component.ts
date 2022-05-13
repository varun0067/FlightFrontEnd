import { Component, OnInit } from '@angular/core';
import { FlightService } from 'src/app/Services/Flight-Service/flight.service';
import { BookingService } from 'src/app/Services/Booking-Service/booking.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-booking-history',
  templateUrl: './booking-history.component.html',
  styleUrls: ['./booking-history.component.scss']
})
export class BookingHistoryComponent implements OnInit {

  constructor(private flightService:FlightService,private bookingService:BookingService,private router:Router) { }
  
  airlines;
  //dispalyHistory:boolean=false;
  bookings;
  airlineName;
  ngOnInit(): void {


    this.bookingService.getBookingHistory(sessionStorage.getItem('email')).subscribe(
      res=>{
        this.bookings=res;
        //console.log(this.bookings[0].departureDate.split('T')[1]);
        //this.dispalyHistory=true;
      }
    )
  }

  viewTicketDetails(pnr){
    this.router.navigateByUrl("passenger-details/"+pnr);
  }

  loadData()
  {
    this.bookingService.getBookingHistory(sessionStorage.getItem('email')).subscribe(
      res=>{
        this.bookings=res;
        //console.log(this.bookings[0].departureDate.split('T')[1]);
        //this.dispalyHistory=true;
      }
    )
  }

  cancleAllTickets(pnr){
    this.bookingService.cancelAllTickets(pnr).subscribe(
      res=>{
        if(res)
          alert("Canceled Successfully");
        this.loadData();
        this.router.navigateByUrl("/booking-history");
      },
      error=>{
        alert(error.error);
      }
    )
  }

  getTravelStatus(flightDepartureDate):boolean{
    var departureDate=new Date(flightDepartureDate);
    var today=new Date();
    // console.log(departureDate);
    // console.log(today);
    if(departureDate<today)
    {
      //console.log(true);
      return true;
    }
    else{
      //console.log(false);
      return false;
    }
  }

}
