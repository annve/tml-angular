import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'vbsecurity',
  templateUrl: './vbsecurity.component.html',
  styleUrls: ['./vbsecurity.component.css']
})
export class VbsecurityComponent implements OnInit {
  htmlSnippet = `Template <script>alert(“Injected Script")</script>
  <b>Syntax</b>`; 
  
  constructor() { }

  ngOnInit() {
  }

}
