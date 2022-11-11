import { Component, OnInit } from '@angular/core';
import { CurrenciesService } from './services/currencies.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  selectedItem: any = {};
  searchTerm: string = '';

  constructor(public currenciesService: CurrenciesService) {
    this.currenciesService.getCurrencies().subscribe((data: any) => {
      this.currenciesService.currencyList = data;
      this.selectedItem = this.currenciesService.currencyList[145];
    });
  }

  ngOnInit() {}

  dropDownClick() {
    let dropDown = document.querySelector('.dropdown') as HTMLElement;
    let searchbox = document.querySelector('#searchbox') as HTMLElement;
    let dropdownInput = document.querySelector('.dropdown-input') as HTMLElement;
    dropDown.classList.toggle('active');
    dropdownInput.classList.toggle('active');
    this.searchTerm = '';
    searchbox.focus();
  }

  selectCurrency(item: any) {
    this.selectedItem = item;
    let dropDown = document.querySelector('.dropdown') as HTMLElement;
    dropDown.classList.remove(...'active');
  }

  searchCurrency() {
    this.currenciesService.currencyList = this.currenciesService.searchCurrencies(
      this.searchTerm
    );
  }
}
