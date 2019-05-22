import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json",
    Authorization: "Bearer ZNzgLzIbolVgF2TrDXPHbxuB7napsi_A9g-adYLLocrcYVx49_mN_IhQeY7KMjiGyU0bf_FZov1VZhSPtFmXAInbA0lygo_GMHNJUSRk_8T3ledB3TliEUklfjHkXHYx"

  })
};

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  constructor(private http: HttpClient) { }

  getInfo(city, state, pricingInfo): Observable<any> {

    return this.http.get<any>(
      `http://localhost:3000/info/${city}/${state}/${pricingInfo}`, httpOptions
    );

  }


}
