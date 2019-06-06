import {Component, OnInit} from '@angular/core';

import {MatDialog, PageEvent} from '@angular/material';

import {DataHandlerService} from '../shared/service/data-handler.service';
import {Venue} from '../shared/model/venue.model';
import {DetailsDialogComponent} from '../details-dialog/details-dialog.component';

@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.css']
})
export class TableViewComponent implements OnInit {

  public readonly displayedColumns: string[] = ['name', 'city', 'postcode', 'address', 'startYear'];
  public readonly pageSizeOptions: number[] = [10, 20, 30];

  public pageEvent: PageEvent;

  public constructor(
    private dataHandler: DataHandlerService,
    public dialog: MatDialog
  ) {
  }

  public ngOnInit() {
  }

  public getVenues(): Venue[] {
    return this.dataHandler.venues;
  }

  public getVenuesPage(): Venue[] {
    if (this.pageEvent === undefined) {
      return this.dataHandler.venues.slice(0, this.pageSizeOptions[0]); // first page size is default
    }
    const startIndex = this.pageEvent.pageIndex * this.pageEvent.pageSize;
    const end = startIndex + this.pageEvent.pageSize;
    const endIndex = end < this.pageEvent.length ? end : this.pageEvent.length - 1;

    return this.dataHandler.venues.slice(startIndex, endIndex);
  }

  public isSelected(row: Venue) {
    return this.dataHandler.selectedVenue ? row.trcid === this.dataHandler.selectedVenue.trcid : false;
  }

  public selectVenue(row: Venue) {
    this.dataHandler.selectedVenue = row;
    this.openDetailsDialog();
  }

  private openDetailsDialog() {

    this.dialog.open(DetailsDialogComponent, {
      width: '800px',
      data: this.dataHandler.selectedVenue
    });
  }

}
