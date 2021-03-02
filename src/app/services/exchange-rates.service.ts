import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ExchangeRatesResponse } from './payloads/ExchangeRatesResponse';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrencyExchangeService {

  constructor(private http:HttpClient) { }

 


  getRates(base: string): Observable<ExchangeRatesResponse> {
    return this.http.get<ExchangeRatesResponse>(`https://api.exchangeratesapi.io/latest?base=${base}`);
  }
  
}