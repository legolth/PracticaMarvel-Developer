import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule} from '@angular/material/dialog';
import { MatButtonModule} from '@angular/material/button';
import { MatCardModule} from '@angular/material/card';
import { MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';

import { AppComponent } from './app.component';
import { IniciadorMarvelComponent } from './iniciador-marvel/iniciador-marvel.component';
import { ModalListMarvelComponent } from './modal-list-marvel/modal-list-marvel.component';
import { DataTableMarvelComponent } from './data-table-marvel/data-table-marvel.component';


@NgModule({
  declarations: [
    AppComponent,
    IniciadorMarvelComponent,
    ModalListMarvelComponent,
    DataTableMarvelComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
