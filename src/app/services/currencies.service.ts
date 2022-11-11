import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CurrenciesService {
  currencyList: any[] = [];

  constructor(private http: HttpClient) {
    
  }

  getCurrencies() {
    return this.http.get('assets/json/currencies-with-flags.json');
  }

}
