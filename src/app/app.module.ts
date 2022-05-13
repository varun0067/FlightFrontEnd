import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Home/home/home.component';
import { AdminLoginComponent } from './Home/admin-login/admin-login.component';
import { RegisterUserComponent } from './Home/register-user/register-user.component';
import { HomeNavComponent } from './Home/home-nav/home-nav.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from './Auth-Guard/auth.guard';
import { AuthService } from './Services/Auth-Service/auth.service';
import { UserDashboardComponent } from './User/user-dashboard/user-dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { UserNavComponent } from './User/user-nav/user-nav.component';
import { AdminNavComponent } from './Admin/admin-nav/admin-nav.component';
import { AdminDashboardComponent } from './Admin/admin-dashboard/admin-dashboard.component';
import { AddAirlineComponent } from './Admin/add-airline/add-airline.component';
import { AddFlightComponent } from './Admin/add-flight/add-flight.component';
import { FlightService } from './Services/Flight-Service/flight.service';
import { ViewAirlineComponent } from './Admin/view-airline/view-airline.component';
import { ViewFlightComponent } from './Admin/view-flight/view-flight.component';
import { EditFlightComponent } from './Admin/edit-flight/edit-flight.component';
import { BookTicketComponent } from './User/book-ticket/book-ticket.component';
import { BookingService } from './Services/Booking-Service/booking.service';
import { BookingHistoryComponent } from './User/booking-history/booking-history.component';
import { PassengerDetailsComponent } from './User/passenger-details/passenger-details.component';
import { SearchByPnrComponent } from './User/search-by-pnr/search-by-pnr.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminLoginComponent,
    RegisterUserComponent,
    HomeNavComponent,
    UserDashboardComponent,
    UserNavComponent,
    AdminNavComponent,
    AdminDashboardComponent,
    AddAirlineComponent,
    AddFlightComponent,
    ViewAirlineComponent,
    ViewFlightComponent,
    EditFlightComponent,
    BookTicketComponent,
    BookingHistoryComponent,
    PassengerDetailsComponent,
    SearchByPnrComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  providers: [AuthGuard,
    AuthService,
    FlightService,
    BookingService
],
  bootstrap: [AppComponent]
})
export class AppModule { }
