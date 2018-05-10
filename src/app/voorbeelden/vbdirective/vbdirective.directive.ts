import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[myhighlight]'
})
export class HighlightDirective {

  constructor(el: ElementRef) { 
    // el verwijst naar het elt waar het directive bij staat
    el.nativeElement.style.backgroundColor = '#ccff00';
  }

}
