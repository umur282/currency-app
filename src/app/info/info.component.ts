import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { CurrencyService, CurrencyData } from '../currency.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit, OnDestroy {

  dataSub: Subscription;
  arraySub: Subscription;
  currencyData: CurrencyData = new CurrencyData();
  currencyArray: string[];
  selectedSource: string = 'TRY';
  targetArray: string[] = ['CNY', 'EUR', 'GBP', 'INR', 'JPY', 'KRW', 'RUB', 'TRY', 'USD'];
  sourceArray: string[] = [].concat(this.targetArray);

  constructor(private currencyService: CurrencyService) {}

  ngOnInit() {
    this.dataSub = this.currencyService.dataSubject.subscribe(data => {
      this.currencyData = data;
    });
    this.arraySub = this.currencyService.arraySubject.subscribe(array => {
      this.currencyArray = array;
    })

    this.onUpdateData();
  }

  onUpdateData() {
    this.currencyService.fetchCurriencies() // fetching
      .then(() => {
        // Changing source currency
        this.currencyService.changeSource(this.selectedSource);
      })
      .catch(err => {
        console.log(err);
      });
  }

  onChangeSource(event: InputEvent) {
    const newSource: string = (event.target as HTMLInputElement).value;
    // getting the name of selected currency

    this.selectedSource = newSource;

    this.currencyService.changeSource(newSource);
    // sending the name to service
  }

  onSwitchSource(newSource: string) {
    this.selectedSource = newSource;

    this.currencyService.changeSource(newSource);
  }

  onToggleTarget(event: InputEvent) {
    const newTarget: string = (event.target as HTMLInputElement).value;
    // getting the value from the html input

    if (this.currencyArray.includes(newTarget) && // validation
        this.targetArray.includes(newTarget)) {
        // target is already in the array

      this.targetArray.splice(this.targetArray.indexOf(newTarget), 1);
      // removing the selected target from the array

    } else if (this.currencyArray.includes(newTarget) && // validation
               !this.targetArray.includes(newTarget)) {
        // target is not in the array

      this.targetArray.push(newTarget); // pushing new target into array
      this.targetArray.sort(); // sorting the array
    }
  }

  onRemoveTarget(target: string) {
    if (this.currencyArray.includes(target) &&
        this.targetArray.includes(target)) {

      this.targetArray.splice(this.targetArray.indexOf(target), 1);

    }
  }

  ngOnDestroy() {
    this.dataSub.unsubscribe();
    this.arraySub.unsubscribe();
  }
}
