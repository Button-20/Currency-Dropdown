import { Component, OnInit } from '@angular/core';
import { CurrenciesService } from './services/currencies.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  selectedItem: any = {};

  constructor(public currenciesService: CurrenciesService) {}

  ngOnInit() {
    this.currenciesService.getCurrencies().subscribe((data: any) => {
      this.currenciesService.currencyList = data;
      this.selectedItem = this.currenciesService.currencyList[145];
    });
  }

  dropDownClick() {
    let dropDown = document.querySelector('.dropdown') as HTMLElement;
    dropDown.classList.toggle('active');
  }

  selectCurrency(item: any) {
    this.selectedItem = item;
    let dropDown = document.querySelector('.dropdown') as HTMLElement;
    dropDown.classList.remove(...'active');
  }
}
