export interface VenueDetails {
  en: VenueDetailSingle;
  de: VenueDetailSingle;
  fr: VenueDetailSingle;
  nl: VenueDetailSingle;
  it: VenueDetailSingle;
  es: VenueDetailSingle;
}

export interface VenueDetailSingle {
  language: string;
  title: string;
  calendarsummary: string;
  shortdescription: string;
  longdescription: string;
}
