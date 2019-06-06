import {VenueMedia} from './venue-media.model';
import {VenueLocation} from './venue-location.model';
import {VenueDetails} from './venue-details.model';
import {VenueDates} from './venue-dates.model';


export interface Venue {
  trcid: string;
  title: string;
  details: VenueDetails;
  location: VenueLocation;
  urls: string[];
  media: VenueMedia[];
  dates: VenueDates;
}
