import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FlightService } from 'src/app/Services/Flight-Service/flight.service';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';
import { BookingService } from 'src/app/Services/Booking-Service/booking.service';

@Component({
  selector: 'app-book-ticket',
  templateUrl: './book-ticket.component.html',
  styleUrls: ['./book-ticket.component.scss']
})
export class BookTicketComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute,private flightService:FlightService,private formBulider:FormBuilder,
    private bookingService:BookingService,private router:Router) { }

  airline;
  bookTicket;
  flightNumber;
  flight;
  departureDate;
  availableTickets;
  ngOnInit(): void {

    this.flightNumber=this.activatedRoute.snapshot.paramMap.get("flightNumber");
    this.departureDate=this.activatedRoute.snapshot.paramMap.get("departureDate");
    this.airline=this.activatedRoute.snapshot.paramMap.get("airline");

    this.flightService.getFlightByFlightNumber(this.flightNumber).subscribe(
      res=>{
        this.flight=res;
        //console.log(this.flight);

        if(this.flight.departureTime.minutes==0)
          this.flight.departureTime.minutes="00";
        if(this.flight.departureTime.hours<10)
          this.flight.departureTime.hours="0"+this.flight.departureTime.hours; 
        var time=(this.flight.departureTime.hours+":"+this.flight.departureTime.minutes).toString();

        this.bookTicket  = this.formBulider.group({

          email:[sessionStorage.getItem('email')],
          airlineName:[this.airline],
          flightNumber:[this.flightNumber],
          departure:[this.flight.departure],
          destination:[this.flight.destination],
          departureDate:[this.departureDate+"T"+time+":00"],
          numberOfTickets:[''],
          ticketCost:[this.flight.ticketCost],
          passengers:this.formBulider.array([
            this.initPassenger(), 
          ])
        })

        //console.log({departureDate:this.departureDate+"T"+time+":00",flightNumber:this.flightNumber});
        this.flightService.getAvailableTickets({departureDate:this.departureDate+"T"+time+":00",flightNumber:this.flightNumber}).subscribe(
          res=>{
            this.availableTickets=res;
            //console.log(this.availableTickets);
          }
        )
      }
    )
  }

  initPassenger(){
    return this.formBulider.group({
      email:['',Validators.required],
      name:['',Validators.required],
      age:['',Validators.required],
      gender:['',Validators.required],
      seatNumber:['',Validators.required],
      meals:['',Validators.required],
      bookingStatus:['']
    })
  }

  addPassenger(){
    
    const control=<FormArray>this.bookTicket.controls['passengers'];
    control.push(this.initPassenger());
  }
  removePassenger(i:number){
    const control = <FormArray>this.bookTicket.controls['passengers'];
    control.removeAt(i);
  }

  seatError:boolean=false;
  bookTickets(){
    this.bookTicket.value.numberOfTickets=this.bookTicket.value.passengers.length;
    var selectedSeats:string[]=[];
    for(let i=0;i<this.bookTicket.value.passengers.length;i++){
      this.bookTicket.value.passengers[i].age=parseInt(this.bookTicket.value.passengers[i].age);
      selectedSeats.push(this.bookTicket.value.passengers[i].seatNumber);
    }
    this.seatError=(new Set(selectedSeats)).size !== selectedSeats.length;

    if(!this.seatError)
    {
      this.bookingService.bookTickets(this.bookTicket.value).subscribe(
        res=>{
          if(res)
            alert("Tickets booked successfully");
          else
            alert("Server Error please try again later");
        },
        error=>{
          alert(error.error);
        }
      )
      this.router.navigateByUrl('/user-dashboard');
    }
    // console.log(this.seatError);
    // console.log(selectedSeats);
    // console.log(this.bookTicket.value);
     
  }
}
