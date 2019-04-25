import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DragableComponent } from './dragable/dragable.component';
import { PanelComponent } from './dragable/panel/panel.component';
import { DragDropDirective } from './dragable/drag-drop.directive';

@NgModule({
  declarations: [
    AppComponent,
    DragableComponent,
    PanelComponent,
    DragDropDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    PanelComponent
  ]
})
export class AppModule { }
