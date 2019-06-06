import {Component, OnInit} from '@angular/core';

import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material';

import {DataHandlerService} from '../shared/service/data-handler.service';

import establishments from '../../assets/data/establishment-data.json';

@Component({
  selector: 'app-establishments-menu',
  templateUrl: './establishments-menu.component.html',
  styleUrls: ['./establishments-menu.component.css']
})
export class EstablishmentsMenuComponent implements OnInit {

  public readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  public nameFilter: string;
  public citiesFilter: string[] = [];
  public startYearFilter: number;
  public postcodeFilter: string;

  public constructor(
    private dataHandler: DataHandlerService
  ) {
  }

  public ngOnInit() {
    this.dataHandler.venues = establishments;
  }

  public applyFilters() {
    if ((this.nameFilter || '').trim()) {
      this.dataHandler.filterByName(this.nameFilter.trim());
    }
    if (this.citiesFilter.length !== 0) {
      this.dataHandler.filterByCities(this.citiesFilter);
    }
    if (this.startYearFilter) {
      this.dataHandler.filterByStartYear(this.startYearFilter);
    }
    if ((this.postcodeFilter || '').trim()) {
      this.dataHandler.filterByPostcode(this.postcodeFilter.trim());
    }
  }

  public clearFilters() {
    this.dataHandler.venues = establishments;
  }

  public addCity(event: MatChipInputEvent) {
    const input = event.input;
    const value = event.value;

    if ((value || '').trim()) {
      this.citiesFilter.push(value.trim());
    }

    if (input) {
      input.value = '';
    }
  }

  public removeCity(city: string) {
    const index = this.citiesFilter.indexOf(city);

    if (index >= 0) {
      this.citiesFilter.splice(index, 1);
    }
  }

}
