import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private http:HttpClient) { }

  bookTickets(tickets){

    let httpHeaders=new HttpHeaders({
      'Authorization':'Bearer '+sessionStorage.getItem("jwt")
    });

    return this.http.post<any>(environment.BookingURL+'bookTickets',tickets,{headers:httpHeaders});
  }

  getBookingHistory(email){
    let httpHeaders=new HttpHeaders({
      'Authorization':'Bearer '+sessionStorage.getItem("jwt")
    });

    return this.http.get<any>(environment.BookingURL+'getBookingHistoryOfUser/'+email,{headers:httpHeaders});
  }

  getPassengerDetails(pnr){

    let httpHeaders=new HttpHeaders({
      'Authorization':'Bearer '+sessionStorage.getItem("jwt")
    });

    return this.http.get<any>(environment.BookingURL+'getTicketDetailsOnPNR/'+pnr,{headers:httpHeaders});
  }

  cancelSingleTicket(cancel){
    let httpHeaders=new HttpHeaders({
      'Authorization':'Bearer '+sessionStorage.getItem("jwt")
    });

    return this.http.post<any>(environment.BookingURL+'cancelSingleTicket',cancel,{headers:httpHeaders});
  }

  cancelAllTickets(pnr){
    let httpHeaders=new HttpHeaders({
      'Authorization':'Bearer '+sessionStorage.getItem("jwt")
    });

    return this.http.post<any>(environment.BookingURL+'cancelAllTickets/'+pnr,{headers:httpHeaders});
  }
}
