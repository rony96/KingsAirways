import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { UserModule } from './user/user.module';
import {AdminModule} from './admin/admin.module';
import { HeaderComponent } from './ui/header.component';
import { FooterComponent } from './ui/footer.component';
import { UserdashboardComponent } from './user/userdashboard.component';
import { BookingHistoryComponent } from './user/booking-history.component';
import { UpcomingTripsComponent } from './user/upcoming-trips.component';
import { ManageAccountComponent } from './user/manage-account.component';
import { AdminDashboardComponent } from './admin/admin-dashboard.component';
import { EditFlightsComponent } from './admin/edit-flights.component';
import { UserdashHeaderComponent } from './ui/userdash-header.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    UserdashboardComponent,
    BookingHistoryComponent,
    UpcomingTripsComponent,
    ManageAccountComponent,
    AdminDashboardComponent,
    EditFlightsComponent,
    UserdashHeaderComponent
  ],
  imports: [
    BrowserModule, UserModule,AdminModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
