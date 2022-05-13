import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FlightService } from 'src/app/Services/Flight-Service/flight.service';

@Component({
  selector: 'app-view-flight',
  templateUrl: './view-flight.component.html',
  styleUrls: ['./view-flight.component.scss']
})
export class ViewFlightComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute,private flightService:FlightService,private router:Router) { }

  id;
  flights;
  ngOnInit(): void {
    this.id=this.id=this.activatedRoute.snapshot.paramMap.get("id");

    this.flightService.getFlightsByAirlineId(this.id).subscribe(
      res=>{
        console.log(res);
        this.flights=res;
      }
    )
  }

  // deleteFlight(flightNumber){
  //   this.flightService.deleteFlight(flightNumber).subscribe(
  //     res=>{
  //       if(res)
  //         alert("Flight Deleted Successfully");
  //       else
  //         alert("Server error please try agian later");
  //       this.router.navigateByUrl("/admin-dashboard");
  //     }
  //   )
  // }

  editFlight(flightNumber)
  {
    this.router.navigateByUrl("/edit-flight/"+flightNumber);
  }
}
