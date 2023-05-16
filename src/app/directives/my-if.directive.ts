import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appMyIf]'
})
export class MyIfDirective {

  constructor(private tRef : TemplateRef<any>, private cRef : ViewContainerRef) {} 
    
    @Input() set appMyIf(condition: boolean)
    {
      if (!condition) {
        this.cRef.createEmbeddedView(this.tRef);
      }
      else {
      this.cRef.clear();        }
      }
}
