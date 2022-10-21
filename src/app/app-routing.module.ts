import { NgModule } from '@angular/core';
import {Router, RouterModule, Routes} from '@angular/router';
import {MainComponent} from "@layouts";

const routes: Routes = [
  {path: '', component: MainComponent, children: [
      {path:'hz', component: MainComponent}]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(
    private readonly router: Router
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }
}
