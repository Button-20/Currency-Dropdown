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
    this.refreshList();
  }

  ngOnInit() {}

  refreshList() {
    this.currenciesService.getCurrencies().subscribe((data: any) => {
      this.currenciesService.currencyList = data;
      this.selectedItem = this.currenciesService.currencyList[164];
    });
  }

  dropDownClick() {
    // Get the dropdown element
    let dropDown = document.querySelector('.dropdown') as HTMLElement;
    // Get the search input element
    let searchbox = document.querySelector('#searchbox') as HTMLElement;
    // Get the dropdown input to hide inner elements
    let dropdownInput = document.querySelector(
      '.dropdown-input'
    ) as HTMLElement;
    dropDown.classList.toggle('active');
    dropdownInput.classList.toggle('active');
    // Reset the search input
    this.searchTerm = '';
    // Set focus on search input
    searchbox.focus();

    // Close the dropdown if the user clicks outside of it
    document.addEventListener('click', function (e: any) {
      if (!dropDown.contains(e.target)) {
        dropDown.classList.remove('active');
        dropdownInput.classList.remove('active');
      }
    });
  }

  selectCurrency(item: any) {
    this.selectedItem = item;
    let dropDown = document.querySelector('.dropdown') as HTMLElement;
    dropDown.classList.remove(...'active');
  }
}
