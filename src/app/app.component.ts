import { Component } from '@angular/core';

import { Venue } from './shared/model/venue.model';

import venues from 'src/assets/data/establishment-data.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'OutInAmsterdam';
  public venues: Venue[] = venues;
}
