import { TestBed, inject } from '@angular/core/testing';

import { CalculatorService } from './calculator.service';

describe('CalculatorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CalculatorService]
    });
  });

  it('should be created', inject([CalculatorService], (service: CalculatorService) => {
    expect(service).toBeTruthy();
  }));
  describe("calculator.service", function () {

    it("should calculate the sum of two numbers", function () {
      var calc: CalculatorService;
      calc = new CalculatorService();
      var testCase: number = calc.sum(5, 6);
      expect(testCase).toBe(11);
    });
  });
});
