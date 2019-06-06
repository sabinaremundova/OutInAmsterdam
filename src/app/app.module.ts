import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {EstablishmentsMenuComponent} from './establishments-menu/establishments-menu.component';
import {TableViewComponent} from './table-view/table-view.component';
import {DataHandlerService} from './shared/service/data-handler.service';
import {DetailsDialogComponent} from './details-dialog/details-dialog.component';

import {
  MatButtonModule,
  MatChipsModule,
  MatDialogModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatPaginatorModule,
  MatTableModule,
  MatToolbarModule
} from '@angular/material';
import {FullDateToYearPipe} from './shared/full-date-to-year.pipe';

const materialImports = [
  MatToolbarModule,
  MatTableModule,
  MatFormFieldModule,
  MatChipsModule,
  MatInputModule,
  MatIconModule,
  MatButtonModule,
  MatPaginatorModule,
  MatDialogModule
];

@NgModule({
  declarations: [
    AppComponent,
    EstablishmentsMenuComponent,
    TableViewComponent,
    DetailsDialogComponent,
    FullDateToYearPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ...materialImports
  ],
  entryComponents: [DetailsDialogComponent],
  providers: [DataHandlerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
