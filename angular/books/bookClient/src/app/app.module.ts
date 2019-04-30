import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DisplayBooksComponent } from './displayBooks/display-books.component';
import { CreateBookComponent } from './create-book/create-book.component';


@NgModule({
  declarations: [
    AppComponent,
    DisplayBooksComponent,
    CreateBookComponent,

  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
