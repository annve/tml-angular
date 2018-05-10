import { Component, OnInit } from '@angular/core';
import { VbScholenService03 } from './vbservice03';
import { School } from './model';

@Component({
  selector: 'vbservice03',
  templateUrl: './vbservice.component.html',
  styleUrls: ['./vbservice.component.css']
})
export class VbServiceComponent03 implements OnInit {
  scholen: School[];

  // VbScholenService wordt geïnjecteerd (D.I. = dependency injection)
  // dependency injection:  deze klasse maakt zelf geen extern resource (Scholenservice) aan,
  // maar krijgt het resource van buitenaf (in dit geval maakt ng deze)
  constructor(private scholenService: VbScholenService03) { }

  ngOnInit() {
    //scholenService.getScholen geeft een Observable terug
    // door in te schrijven (subscribe) op de observable,
    // zal de bijhorende callback uitgevoerd worden als 
    // dat resultaat verandert
    this.scholenService.getScholen().subscribe(
      data => {
        this.scholen = [];
        data["data"].forEach(element => {
          this.scholen.push(new School(
            element.naam, element.straat + " " + element.huisnummer,
            element.postcode, element.district
          ));
        });
      });
  }
}