import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CurrenciesService {
  currencyList: any[] = [];

  constructor(private http: HttpClient) {}

  getCurrencies() {
    return this.http.get('assets/json/currencies-with-flags.json');
  }

}
