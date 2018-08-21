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
<<<<<<< HEAD
import { BookingHistoryComponent } from './user/booking-history.component';
import { UpcomingTripsComponent } from './user/upcoming-trips.component';
import { ManageAccountComponent } from './user/manage-account.component';
import { AdminDashboardComponent } from './admin/admin-dashboard.component';
import { EditFlightsComponent } from './admin/edit-flights.component';
import { UserdashHeaderComponent } from './ui/userdash-header.component';
=======
import { SearchDetailComponent } from './search-detail.component';
>>>>>>> 2034a0629ee927294f458f28dec4bf19748551c1

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    UserdashboardComponent,
<<<<<<< HEAD
    BookingHistoryComponent,
    UpcomingTripsComponent,
    ManageAccountComponent,
    AdminDashboardComponent,
    EditFlightsComponent,
    UserdashHeaderComponent
=======
    SearchDetailComponent
>>>>>>> 2034a0629ee927294f458f28dec4bf19748551c1
  ],
  imports: [
    BrowserModule, UserModule,AdminModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
