import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'vbrouting-reqparam',
  templateUrl: './vbrouting-reqparam.component.html',
  styleUrls: ['./vbrouting-reqparam.component.css']
})
export class VbroutingReqparamComponent implements OnInit {
  reqParamId: string;

  constructor(private route: ActivatedRoute) { 
      this.reqParamId = this.route.snapshot.paramMap.get('id');
    }

  ngOnInit() {
  }

}