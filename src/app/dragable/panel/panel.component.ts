import { Component, OnInit } from '@angular/core';

import { DragEvents } from '../helper/drag-events';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent extends DragEvents implements OnInit {

  public isdraggable = false;

  constructor() {
    super()
    this.componentName = 'DragableComponent';
    this.isdraggable = true;
  }

  ngOnInit() {
  }

}
