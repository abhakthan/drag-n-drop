import { Component, OnInit, ViewChild, ComponentFactoryResolver } from '@angular/core';

import { DragDropDirective } from './drag-drop.directive';
import { PanelComponent } from './panel/panel.component';

@Component({
  selector: 'app-dragable',
  templateUrl: './dragable.component.html',
  styleUrls: ['./dragable.component.scss']
})
export class DragableComponent implements OnInit {

  @ViewChild(DragDropDirective) appDragDrop: DragDropDirective;

  private end: number;
  private componentArray = [];

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {
  }

  public ngOnInit() {
    this.loadComponents();
  }

  private loadComponents() {
    let componentOne = this.componentFactoryResolver
      .resolveComponentFactory(PanelComponent)

    let componentTwo = this.componentFactoryResolver
      .resolveComponentFactory(PanelComponent)

    this.appDragDrop.viewContainerRef.clear();
    let oneRef = this.appDragDrop.viewContainerRef.createComponent(componentOne);
    oneRef.instance.index = 1;
    oneRef.instance.event.subscribe((e) => {
      this.event(e);
    });
    this.componentArray.push(1);

    let twoRef = this.appDragDrop.viewContainerRef.createComponent(componentTwo);
    twoRef.instance.index = 2;
    twoRef.instance.event.subscribe((e) => {
      this.event(e);
    });
    this.componentArray.push(2);

    let threeRef = this.appDragDrop.viewContainerRef.createComponent(componentTwo);
    threeRef.instance.index = 3;
    threeRef.instance.event.subscribe((e) => {
      this.event(e);
    });
    this.componentArray.push(3);
  }

  private event($event) {

    if ($event.dragstart) {
      // console.log('Start', $event.id);
    }

    if ($event.dragend) {
      this.move($event);
      // console.log('End', this.end);
      // console.log('Start', $event.id);
      // console.log(this.componentArray);

      // let viewContainerRef = this.appDragDrop.viewContainerRef;

      // this.appDragDrop.viewContainerRef.remove(this.end);

      // let i = 0;
      // let toStart = 0;
      // let toEnd = 0;
      // for (i; i < this.componentArray.length; i++) {
      //   if (this.componentArray[i] === this.end) {
      //     toEnd = i;
      //   }
      //   if (this.componentArray[i] === $event.id) {
      //     toStart = i;
      //   }
      // }

      // console.log(toStart, toEnd);

      // let temp = this.componentArray.splice(toStart, 1);
      // console.log(temp);
      // this.componentArray.splice(toEnd, 0, temp[0]);
      // console.log(this.componentArray);

      // let ref = viewContainerRef.get(toStart);
      // viewContainerRef.move(ref, toEnd);

      // let i = 0;
      // for (i; i < viewContainerRef.length; i++) {
      //   console.log(viewContainerRef.get(i));
      // }

      // console.log($event);

      // console.log($event.dragend);
      // let parent = $event.dragend.target.parentNode;
      // parent.insertBefore(document.getElementById(this.end), $event.dragend.target);
    }

    if ($event.dragover) {
      this.end = $event.id;
    }
  }

  private move($event) {
    let viewContainerRef = this.appDragDrop.viewContainerRef;

    let toStart = 0;
    let toEnd = 0;

    this.componentArray.forEach((element, i) => {
      if (element === this.end) {
        toEnd = i;
      }
      if (element === $event.id) {
        toStart = i;
      }
    });

    let temp = this.componentArray.splice(toStart, 1);
    this.componentArray.splice(toEnd, 0, temp[0]);

    let ref = viewContainerRef.get(toStart);
    viewContainerRef.move(ref, toEnd);

  }
}
