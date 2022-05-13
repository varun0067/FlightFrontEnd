import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookingService } from 'src/app/Services/Booking-Service/booking.service';

@Component({
  selector: 'app-passenger-details',
  templateUrl: './passenger-details.component.html',
  styleUrls: ['./passenger-details.component.scss']
})
export class PassengerDetailsComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute,private bookingService:BookingService,private router:Router) { }
  
  pnr;
  passengers;
  ngOnInit(): void {
    this.pnr=this.activatedRoute.snapshot.paramMap.get("pnr");

    this.bookingService.getPassengerDetails(this.pnr).subscribe(
      res=>{
        this.passengers=res;
        //console.log(this.passengers[0]);
      }
    )
  }

  loadData()
  {
    this.bookingService.getPassengerDetails(this.pnr).subscribe(
      res=>{
        this.passengers=res;
        //console.log(this.passengers[0]);
      }
    )
  }

  cancelSingleTicket(email){
    this.bookingService.cancelSingleTicket({email:email,pnr:this.pnr}).subscribe(
      res=>{
        if(res)
          alert("Canceled successfully");
        this.loadData();
        this.router.navigateByUrl("/passenger-details/"+this.pnr);
      },
      error=>{
        alert(error.error);
      }
    )
  }

}
