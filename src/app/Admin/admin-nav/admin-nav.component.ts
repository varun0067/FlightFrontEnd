import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/Auth-Service/auth.service';

@Component({
  selector: 'app-admin-nav',
  templateUrl: './admin-nav.component.html',
  styleUrls: ['./admin-nav.component.css']
})
export class AdminNavComponent implements OnInit {

  constructor(private authService:AuthService) { }

  ngOnInit(): void {
  }

  //logout
  logout()
  {
    this.authService.logout();
  }

}
