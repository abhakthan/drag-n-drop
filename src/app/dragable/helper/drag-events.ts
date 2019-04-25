import { HostListener, Output, EventEmitter } from '@angular/core';

export class DragEvents {
  public componentName: string;
  public index = Math.floor(Math.random() * 100);

  @Output() public event = new EventEmitter();

  @HostListener('dragstart', ['$event']) onDragstart(event) {
    this.event.emit({
      id: this.index,
      component: this.componentName,
      dragstart: event
    });
  }

  @HostListener('dragend', ['$event']) onDragend(event) {
    this.event.emit({
      id: this.index,
      component: this.componentName,
      dragend: event
    });
  }

  @HostListener('drop', ['$event']) onDrop(event) {
    this.event.emit({
      id: this.index,
      component: this.componentName,
      drop: event
    });
  }

  @HostListener('dragover', ['$event']) onDragover(event) {
    event.preventDefault();
    this.event.emit({
      id: this.index,
      component: this.componentName,
      dragover: event
    });
  }

  @HostListener('dragenter', ['$event']) onDragenter(event) {
    this.event.emit({
      id: this.index,
      component: this.componentName,
      dragenter: event
    });
  }

  @HostListener('dragleave', ['$event']) onDragleave(event) {
    this.event.emit({
      id: this.index,
      component: this.componentName,
      dragleave: event
    });
  }
}