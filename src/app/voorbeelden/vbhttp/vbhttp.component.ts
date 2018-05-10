import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'vbhttp',
  templateUrl: './vbhttp.component.html',
  styleUrls: ['./vbhttp.component.css']
})
export class VbHttpComponent implements OnInit {
  customers: any[];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('https://www.w3schools.com/angular/customers.php').subscribe(
      data => {
        this.customers = data["records"];
      },
      error => {
        console.log("Er is iets fout gelopen tijdens het opvragen van de gegevens.");
        console.log(error.message);
      });
  }

}
