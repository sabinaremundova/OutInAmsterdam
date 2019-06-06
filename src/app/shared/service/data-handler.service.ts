import {Injectable} from '@angular/core';

import {Venue} from '../model/venue.model';

@Injectable({
  providedIn: 'root'
})
export class DataHandlerService {

  public venues: Venue[] = [];
  public selectedVenue: Venue;

  constructor() { }

  public filterByName(substring: string) {
    this.venues = this.venues
      .filter((v: Venue) => {
        return (v.title || '').toLowerCase().includes(substring.toLowerCase());
      });
  }

  public filterByCities(cities: string[]) {
    cities = cities.map((c: string) => c.toLowerCase());
    this.venues = this.venues.filter((v: Venue) => {
      return cities.indexOf((v.location.city || '').toLowerCase()) >= 0;
    });
  }

  public filterByStartYear(year: number) {
    this.venues = this.venues.filter((v: Venue) => {
      const startYear = new Date(v.dates.startdate).getFullYear();
      return startYear ? startYear === year : false;
    });
  }

  public filterByPostcode(postcode: string) {
    this.venues = this.venues.filter((v: Venue) => {
      return v.location.zipcode ? v.location.zipcode === postcode : false;
    });
  }
}
