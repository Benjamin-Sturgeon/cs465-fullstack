import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TripCardComponent } from '../trip-card/trip-card.component';
import { TripDataService } from '../services/trip-data.service';
import { Trip } from '../models/trip';
import { Router } from '@angular/router';
//import { trips } from '../data/trips';
import { AuthenticationService } from '../services/authentication.service';


@Component({
  selector: 'app-trip-listing',
  standalone: true,
  imports: [CommonModule, TripCardComponent],
  templateUrl: './trip-listing.component.html',
  styleUrls: ['./trip-listing.component.css'],
  providers: [TripDataService]
})
export class TripListingComponent implements OnInit {

  //trips: Array<any> = trips;
  trips!: Trip[];
  message: string = '';

  constructor(
    private tripDataService: TripDataService,
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
    console.log('trip-listing constructor');
  }

  ngOnInit(): void {
    console.log('ngOnInit called');
    this.getTrips();
  }

  public isLoggedIn(): boolean {
    return this.authenticationService.isLoggedIn();
  }

  private getTrips(): void {
    this.tripDataService.getTrips().subscribe({
      next: (value: Trip[]) => {
        this.trips = value;
        this.message = value.length > 0 
          ? `There are ${value.length} trips available.` 
          : 'There were no trips retrieved from the database';
        console.log(this.message);
      },
      error: (error: any) => {
        console.error('Error:', error);
      }
    });
  }

  public addTrip(): void {
    this.router.navigate(['add-trip']);
  }
}