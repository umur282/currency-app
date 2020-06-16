import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from '../environments/environment';

// Dummy JSON file
// import apiData from '../assets/apiData.json';

@Injectable()
export class CurrencyService {

  dataSubject: Subject<CurrencyData> = new Subject<CurrencyData>();
  arraySubject: Subject<string[]> = new Subject<string[]>();
  private currencyData: CurrencyData;
  private currencyArray: string[] = [];

  // Dummy API Request
  // fetchCurriencies() {
  //   const resp = JSON.parse(JSON.stringify(apiData));
  //   this.manipulateData(resp);

  //   this.dataSubject.next(this.currencyData);
  //   this.arraySubject.next(this.currencyArray);
  // }

  fetchCurriencies(): Promise<void> {
    return fetch(
      // fetching data from api
      'http://api.currencylayer.com/live' +
      '?access_key=' + environment.access_key +
      '&format=1'
    )
    .then(resp => resp.json())
    .then(resp => {
      this.manipulateData(resp);

      this.dataSubject.next(this.currencyData);
      this.arraySubject.next(this.currencyArray);
    })
    .catch(err => {
      console.log(err);
    });
  }

  manipulateData(data: CurrencyData) {
    // manipulation of currencyData.quotes
    // and creating currencyArray
    const newQuotes: {key: number} = Object();

    for (let [key, value] of Object.entries(data.quotes)) {
      let keyArray: string[] = key.split(''); // getting an array of key for string manipulation for qoutes
      const itemArray: string[] = keyArray.slice(3); // getting the last 3 items from that array for currencyArray

      keyArray = itemArray.concat(keyArray); // A,E,D + U,S,D,A,E,D=A,E,D,U,S,D,A,E,D

      const newKey: string = keyArray.slice(0,6).join(''); // getting the first 6 items=AEDUSA for qoutes
      const newItem: string = itemArray.join('');  // AED for currencyArray

      newQuotes[newKey] = value; // creating a new qoutes to finish the manipulation
      this.currencyArray.push(newItem); // finishing the currency Array
    }

    data.quotes = newQuotes; // finishing the manipulation
    this.currencyData = data;
  }

  changeSource(newSourceCurrency: string) {
    const sourceRatio: number = this.currencyData.quotes[newSourceCurrency + this.currencyData.source];
    // getting ratio of the selected currency from currencyData.qoutes
    const newQuotes: {key: number} = Object();

    this.currencyData.source = newSourceCurrency;
    // Updating the source in currencyData.source

    // Manipulation currencyData.quotes
    for (let [key, value] of Object.entries(this.currencyData.quotes)) {
      const keyArray: string[] = key.split(''); // getting array from keys name
      const newKey: string = keyArray.slice(0, 3).join('') + newSourceCurrency;
      // changing the key name

      newQuotes[newKey] = value * (1 / sourceRatio);
      // creating a new quotes object with new key name and converted value
    }

    this.currencyData.quotes = newQuotes; // finishing the manipulation
  }

  getCurrencyData(): CurrencyData {
    const cloneCurrencies = JSON.parse(JSON.stringify(this.currencyData));

    return cloneCurrencies;
  }

  getCurrencyArray(): string[] {
    return this.currencyArray.slice();
  }

}

export class CurrencyData {
  // Model of the fetch object from api
  privacy: string;
  quotes: {key: number};
  source: string;
  success: boolean;
  terms: string;
  timestamp: number;

  constructor() {
    this.privacy = '';
    this.quotes = { key: 0 };
    this.source = '';
    this.success = false;
    this.terms = '';
    this.timestamp = 0;
  }
}



