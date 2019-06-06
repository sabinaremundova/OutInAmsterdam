import {Injectable} from '@angular/core';

import {Venue} from '../model/venue.model';

import establishments from '../../../assets/data/establishment-data.json';

@Injectable({
  providedIn: 'root'
})
export class DataHandlerService {

  public venues: any[] = establishments;
  public selectedVenue: Venue;

  constructor() { }

  public loadEstablishments() {
    this.venues = establishments;
  }

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
      const startDate = v.dates.startdate;

      if (!startDate) {
        return false;
      }
      const startYear = startDate.slice(startDate.length - 4, startDate.length);

      return startYear === year.toString();
    });
  }

  public filterByPostcode(postcode: string) {
    this.venues = this.venues.filter((v: Venue) => {
      return v.location.zipcode ? v.location.zipcode === postcode : false;
    });
  }
}
