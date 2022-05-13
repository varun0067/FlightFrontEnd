import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Home/home/home.component';
import { RegisterUserComponent } from './Home/register-user/register-user.component';
import { AdminLoginComponent } from './Home/admin-login/admin-login.component';
import { UserDashboardComponent } from './User/user-dashboard/user-dashboard.component';
import { AdminDashboardComponent } from './Admin/admin-dashboard/admin-dashboard.component';
import { AuthGuard } from './Auth-Guard/auth.guard';
import { AddAirlineComponent } from './Admin/add-airline/add-airline.component';
import { ViewAirlineComponent } from './Admin/view-airline/view-airline.component';
import { AddFlightComponent } from './Admin/add-flight/add-flight.component';
import { ViewFlightComponent } from './Admin/view-flight/view-flight.component';
import { EditFlightComponent } from './Admin/edit-flight/edit-flight.component';
import { BookTicketComponent } from './User/book-ticket/book-ticket.component';
import { BookingHistoryComponent } from './User/booking-history/booking-history.component';
import { PassengerDetailsComponent } from './User/passenger-details/passenger-details.component';
import { SearchByPnrComponent } from './User/search-by-pnr/search-by-pnr.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  { path: 'registration', component: RegisterUserComponent},
  { path: 'admin-login', component: AdminLoginComponent},
  { path: 'user-dashboard', component: UserDashboardComponent,canActivate:[AuthGuard]},
  { path: 'admin-dashboard', component: AdminDashboardComponent,canActivate:[AuthGuard]},
  { path: 'add-airline', component: AddAirlineComponent,canActivate:[AuthGuard]},
  { path: 'view-airline', component: ViewAirlineComponent,canActivate:[AuthGuard]},
  { path: 'add-flight', component: AddFlightComponent,canActivate:[AuthGuard]},
  { path: 'edit-flight/:flightNumber', component: EditFlightComponent,canActivate:[AuthGuard]},
  { path: 'view-flight/:id', component: ViewFlightComponent,canActivate:[AuthGuard]},
  { path: 'book-ticket/:flightNumber/:departureDate/:airline', component: BookTicketComponent,canActivate:[AuthGuard]},
  { path: 'booking-history', component: BookingHistoryComponent,canActivate:[AuthGuard]},
  { path: 'passenger-details/:pnr', component: PassengerDetailsComponent,canActivate:[AuthGuard]},
  { path: 'search-by-pnr', component: SearchByPnrComponent,canActivate:[AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
