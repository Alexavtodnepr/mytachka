import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MainPageRouting} from "@pages/main-page/main-page.routing";
import {MainPageComponent} from "@pages/main-page/main-page.component";
import {AuthPageComponent} from "@pages/components/authPage/auth-page.component";
import {RegisterPageComponent} from "@pages/components/register-page/register-page.component";



@NgModule({
  declarations: [
    MainPageComponent,
    AuthPageComponent,
    RegisterPageComponent,
  ],
  imports: [
    CommonModule,
    MainPageRouting,
  ],
  exports:[MainPageComponent]
})
export class MainPageModule { }
