import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MainComponent} from "./main";
import { HeaderComponent } from './components';
import { SidebarComponent } from './components';
import { MobilemenuComponent } from './components';



@NgModule({
  declarations: [
    MainComponent,
    HeaderComponent,
    SidebarComponent,
    MobilemenuComponent,

  ],
  imports: [
    CommonModule,
  ],
  exports: [MainComponent]
})
export class LayoutModule { }
