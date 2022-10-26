import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from '@layouts';
import { MycarspageComponent } from '@pages/components/myCarsPage/mycarspage.component';
import { FuelgasComponent } from '@pages/components/fuelgas/fuelgas.component';
import { AutoservicesComponent } from '@pages/components/autoservices/autoservices.component';
import { InsuranceComponent } from './pages/components/insurance/insurance.component';
import { CountingComponent } from './pages/components/counting/counting.component';
import { ArchiveComponent } from './pages/components/archive/archive.component';
import { NotesComponent } from './pages/components/notes/notes.component';
import { TechnicalviewsComponent } from './pages/components/technicalviews/technicalviews.component';
import { CallingComponent } from './pages/components/calling/calling.component';
import { ShopComponent } from './pages/components/shop/shop.component';
import { SavedComponent } from './pages/components/saved/saved.component';

@NgModule({
  declarations: [
    AppComponent,
    MycarspageComponent,
    FuelgasComponent,
    AutoservicesComponent,
    InsuranceComponent,
    CountingComponent,
    ArchiveComponent,
    NotesComponent,
    TechnicalviewsComponent,
    CallingComponent,
    ShopComponent,
    SavedComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,

  ],
  providers: [],
    exports: [
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
