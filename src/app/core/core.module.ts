import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidePanelComponent } from './side-panel/side-panel.component';




@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidePanelComponent
  ],
  imports: [
    CommonModule,RouterModule
  ],
  exports:[HeaderComponent,FooterComponent,SidePanelComponent]
})
export class CoreModule { }
