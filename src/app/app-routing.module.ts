import { NgModule } from '@angular/core';
import {Router, RouterModule, Routes} from '@angular/router';
import {MainComponent} from "@layouts";
import {MainPageModule} from "@pages/main-page/main-page.module";
import {MycarspageComponent} from "@pages/components/myCarsPage/mycarspage.component";
import {FuelgasComponent} from "@pages/components/fuelgas/fuelgas.component";
import {AutoservicesComponent} from "@pages/components/autoservices/autoservices.component";
import {InsuranceComponent} from "@pages/components/insurance/insurance.component";
import {CountingComponent} from "@pages/components/counting/counting.component";
import {ArchiveComponent} from "@pages/components/archive/archive.component";
import {NotesComponent} from "@pages/components/notes/notes.component";
import {TechnicalviewsComponent} from "@pages/components/technicalviews/technicalviews.component";
import {CallingComponent} from "@pages/components/calling/calling.component";
import {ShopComponent} from "@pages/components/shop/shop.component";
import {SavedComponent} from "@pages/components/saved/saved.component";

const routes: Routes = [
  {path: '', component: MainComponent, children: [
      {path: 'mainPage', loadChildren: () => import('./pages/main-page/main-page.module').then((m) => m.MainPageModule)},
      {path: 'mycars', component: MycarspageComponent},
      {path: 'fuelgas', component: FuelgasComponent},
      {path: 'autoservices', component: AutoservicesComponent},
      {path: 'insuranse', component: InsuranceComponent},
      {path: 'counting', component: CountingComponent},
      {path: 'archive', component: ArchiveComponent},
      {path: 'notes', component: NotesComponent},
      {path: 'technicalviews', component: TechnicalviewsComponent},
      {path: 'calling', component: CallingComponent},
      {path: 'shop', component: ShopComponent},
      {path: 'saved', component: SavedComponent},
]},
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
