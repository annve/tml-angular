import { Component, OnInit } from '@angular/core';
import { Gebruiker } from './gebruiker';

@Component({
  selector: 'vb-form-validation-control',
  templateUrl: './form-validation.component.html',
  styleUrls: ['./form-validation.component.css']
})
export class VbFormValidationComponent implements OnInit {
  user = new Gebruiker("","");

  constructor() { }

  ngOnInit() {
  }

}
