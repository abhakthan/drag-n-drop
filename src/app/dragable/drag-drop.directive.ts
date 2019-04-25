import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appDragDrop]'
})
export class DragDropDirective {
  public name = "DragDropDirective";
  constructor(public viewContainerRef: ViewContainerRef) {
  }
}
