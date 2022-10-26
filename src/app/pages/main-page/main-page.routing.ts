import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {AuthPageComponent} from "@pages/components/authPage/auth-page.component";
import {RegisterPageComponent} from "@pages/components/register-page/register-page.component";

const routes: Routes = [
  {path: 'auth', component: AuthPageComponent},
  {path: 'register', component: RegisterPageComponent},
]
@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class MainPageRouting{}
