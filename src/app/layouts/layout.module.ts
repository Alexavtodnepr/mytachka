import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MainComponent} from "./main";
import { HeaderComponent } from './components';
import { SidebarComponent } from './components';
import { MobilemenuComponent } from './components';
import {MainPageModule} from "@pages/main-page/main-page.module";
import {WidthDirective} from "@core/directives/width.directive";



@NgModule({
  declarations: [
    MainComponent,
    HeaderComponent,
    SidebarComponent,
    MobilemenuComponent,
    WidthDirective
  ],
    imports: [
        CommonModule,
        MainPageModule,

    ],
  exports: [MainComponent,WidthDirective]
})
export class LayoutModule { }
