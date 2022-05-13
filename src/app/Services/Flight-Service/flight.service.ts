import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { mapTo, catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  constructor(private http:HttpClient,private router:Router) { }


  addAirline(airline){

    let httpHeaders=new HttpHeaders({
      'Authorization':'Bearer '+sessionStorage.getItem("jwt")
    });

    return this.http.post<any>(environment.FlightURL+'addAirline',airline,{headers:httpHeaders});
  }

  getAllAirlines(){
    let httpHeaders=new HttpHeaders({
      'Authorization':'Bearer '+sessionStorage.getItem("jwt")
    });

    return this.http.get<any>(environment.FlightURL+'getAllAirline',{headers:httpHeaders});
  }

  activateAirline(id)
  {
    let httpHeaders=new HttpHeaders({
      'Authorization':'Bearer '+sessionStorage.getItem("jwt")
    });

    return this.http.post<any>(environment.FlightURL+'activateAirline/'+id,null,{headers:httpHeaders});
  }

  blockAirline(id)
  {
    let httpHeaders=new HttpHeaders({
      'Authorization':'Bearer '+sessionStorage.getItem("jwt")
    });

    return this.http.post<any>(environment.FlightURL+'blockAirline/'+id,null,{headers:httpHeaders});
  }

  addFlight(flight){

    let httpHeaders=new HttpHeaders({
      'Authorization':'Bearer '+sessionStorage.getItem("jwt")
    });

    return this.http.post<any>(environment.FlightURL+'addFlight',flight,{headers:httpHeaders});
  }

  editFlight(flight){

    let httpHeaders=new HttpHeaders({
      'Authorization':'Bearer '+sessionStorage.getItem("jwt")
    });
    
    return this.http.put<any>(environment.FlightURL+'editFlight',flight,{headers:httpHeaders});
  }

  getFlightsByAirlineId(id)
  {
    let httpHeaders=new HttpHeaders({
      'Authorization':'Bearer '+sessionStorage.getItem("jwt")
    });

    return this.http.get<any>(environment.FlightURL+'getAllFlightsByAirlineId/'+id,{headers:httpHeaders});
  }

  getFlightByFlightNumber(flightNumber)
  {
    let httpHeaders=new HttpHeaders({
      'Authorization':'Bearer '+sessionStorage.getItem("jwt")
    });

    return this.http.get<any>(environment.FlightURL+'getFlightByFlightNumber/'+flightNumber,{headers:httpHeaders});
  }

  deleteFlight(flightNumber){
    let httpHeaders=new HttpHeaders({
      'Authorization':'Bearer '+sessionStorage.getItem("jwt")
    });

    return this.http.post<any>(environment.FlightURL+'deleteFlight/'+flightNumber,null,{headers:httpHeaders});
  }

  searchFlight(search){
    let httpHeaders=new HttpHeaders({
      'Authorization':'Bearer '+sessionStorage.getItem("jwt")
    });

    return this.http.post<any>(environment.FlightURL+'searchFlight',search,{headers:httpHeaders});

  }

  getAvailableTickets(search){
    let httpHeaders=new HttpHeaders({
      'Authorization':'Bearer '+sessionStorage.getItem("jwt")
    });

    return this.http.post<any>(environment.FlightURL+'getAvailableTickets',search,{headers:httpHeaders});
  }
}
