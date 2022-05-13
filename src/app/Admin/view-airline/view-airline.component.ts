import { Component, OnInit} from '@angular/core';
import { FlightService } from 'src/app/Services/Flight-Service/flight.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-airline',
  templateUrl: './view-airline.component.html',
  styleUrls: ['./view-airline.component.scss']
})
export class ViewAirlineComponent implements OnInit {


  constructor(private flightService:FlightService,private router:Router) { 

  }

  airlines;
  ngOnInit(): void {
    this.flightService.getAllAirlines().subscribe(
      res=>{
        this.airlines=res;
      }
    )
  }

  loadData(){
    this.flightService.getAllAirlines().subscribe(
      res=>{
        this.airlines=res;
      }
    )
  }
  activate(id){
    this.flightService.activateAirline(id).subscribe(
      res=>{
        if(res)
          alert("Airline Activated Successfully");
        else
          alert("Some error please try again later");
        this.loadData();
        this.router.navigateByUrl("/admin-dashboard");
      }
    )
  }

  block(id)
  {
    this.flightService.blockAirline(id).subscribe(
      res=>{
        if(res)
          alert("Airline Blocked Successfully");
        else
          alert("Some error please try again later");
        this.loadData();
        this.router.navigateByUrl("/admin-dashboard");
      }
    )
  }

  viewFlights(id){
    this.router.navigateByUrl("/view-flight/"+id);
  }

}
