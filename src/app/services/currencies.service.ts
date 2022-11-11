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

  searchCurrencies(searchTerm: string) {
    if (!searchTerm) {
      this.getCurrencies().subscribe((data: any) => {
        this.currencyList = data;
      });
    }

    return this.currencyList.filter(
      (item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.country.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
}
