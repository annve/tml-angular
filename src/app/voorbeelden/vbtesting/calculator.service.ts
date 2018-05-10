import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {
  public sum(a: any, b: any): number {
    return parseInt(a) + parseInt(b);
  }
}
