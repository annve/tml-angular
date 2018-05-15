import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // <--
import { Observable } from 'rxjs/Observable'; // <--

@Injectable()
export class CurrencyService {

  constructor(private http: HttpClient) { }

  getRates(): Observable<any> {
    return this.http.get('http://api.fixer.io/latest');
  }

  getRate(valuta): Observable<any> {
    return this.http.get('http://api.fixer.io/latest?base=' + valuta);
  }

}
