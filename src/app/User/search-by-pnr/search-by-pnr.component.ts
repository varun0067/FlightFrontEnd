import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BookingService } from 'src/app/Services/Booking-Service/booking.service';
import jspdf from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-search-by-pnr',
  templateUrl: './search-by-pnr.component.html',
  styleUrls: ['./search-by-pnr.component.scss']
})
export class SearchByPnrComponent implements OnInit {

  constructor(private bookingService:BookingService) { }
  searchPNRForm:FormGroup;
  ngOnInit(): void {

    this.searchPNRForm  = new FormGroup({
      'pnr': new FormControl('',[Validators.required])
      });

  }

  loadBooking:boolean=false;
  loadPassenger:boolean=false;
  bookings;
  booking;
  passengers;
  travelCost;
  SearchBookingDetails(){

    this.loadBooking=false;
    this.loadPassenger=false;
    
    this.bookingService.getBookingHistory(sessionStorage.getItem('email')).subscribe(
      res=>{
        this.bookings=res;
        //console.log(this.bookings);
        this.bookings=this.bookings.filter(b=>b.pnr==this.searchPNRForm.value.pnr);
        //console.log(this.bookings);
        this.loadBooking=true;
        this.travelCost=parseInt(this.bookings[0].numberOfTickets)*parseInt(this.bookings[0].ticketCost);
      }
    )

    this.bookingService.getPassengerDetails(this.searchPNRForm.value.pnr).subscribe(
      res=>{
        this.passengers=res;
        //console.log(this.passengers);
        this.loadPassenger=true;
        
      },
      error=>{
        alert(error.error);
      }
    )
  }

  convetToPDF()
  {
    var data = document.getElementById('ticket-details');
    html2canvas(data).then(canvas => {
    console.log(data);
    console.log(canvas);
    // Few necessary setting options
    var imgWidth = 208;
    var pageHeight = 295;
    var imgHeight = canvas.height * imgWidth / canvas.width;
    var heightLeft = imgHeight;
    
    const contentDataURL = canvas.toDataURL('image/png')
    let pdf = new jspdf('p', 'mm', 'a4'); // A4 size page of PDF
    var position = 0;
    pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
    pdf.save('ticket.pdf'); // Generated PDF
    });
    
  }

}
