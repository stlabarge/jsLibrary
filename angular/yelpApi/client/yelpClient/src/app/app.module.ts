import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { InfoService } from '../info.service';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { YelpComponent } from './yelp/yelp.component';

@NgModule({
  declarations: [
    AppComponent,
    YelpComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,


  ],
  providers: [

    HttpClient,
    InfoService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
