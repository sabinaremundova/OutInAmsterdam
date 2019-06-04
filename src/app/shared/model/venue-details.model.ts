export class VenueDetails {
  public en: VenueDetailSingle;
  public de: VenueDetailSingle;
  public fr: VenueDetailSingle;
  public nl: VenueDetailSingle;
  public it: VenueDetailSingle;
  public es: VenueDetailSingle;
}

export class VenueDetailSingle {
  public language: string;
  public title: string;
  public calendarsummary: string;
  public shortdescription: string;
  public longdescription: string;
}
