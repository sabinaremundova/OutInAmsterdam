import {VenueMedia} from './venue-media.model';
import {VenueLocation} from './venue-location.model';
import {VenueDetails} from './venue-details.model';


export class Venue {
  public trcid: string;
  public title: string;
  public details: VenueDetails;
  // public types: VenueType[];
  public location: VenueLocation;
  // public urls: string[];
  public media: VenueMedia[];
  public dates: { singles: string[] }[];
  // public lastupdated: string;
  // public eigenschappen: unknown[];
}

export class VenueDates {
  public singles?: string[];
  public startdate?: string;
  // public enddate?: string;
}

export class Establishment extends Venue {

}

export class Event extends Venue {

}
