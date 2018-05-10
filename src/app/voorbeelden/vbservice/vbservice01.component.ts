import { Component, OnInit } from '@angular/core';
import { VbScholenService01 } from './vbservice01';
import { School } from './model';

@Component({
  selector: 'vbservice01',
  templateUrl: './vbservice.component.html',
  styleUrls: ['./vbservice.component.css']
})
export class VbServiceComponent01 implements OnInit {
  scholen: School[];

  // VbScholenService wordt geïnjecteerd (D.I. = dependency injection)
  // dependency injection:  deze klasse maakt zelf geen extern resource (Scholenservice) aan,
  // maar krijgt het resource van buitenaf (in dit geval maakt ng deze)
  constructor(private scholenService: VbScholenService01) { }

  ngOnInit() {
    this.scholen = this.scholenService.getScholen();
  }

}
