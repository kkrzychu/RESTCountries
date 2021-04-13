import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './partials/nav/nav.component';
import { FooterComponent } from './partials/footer/footer.component';
import { ViewContinentsComponent } from './pages/view-continents/view-continents.component';
import { ViewDetailsComponent } from './pages/view-details/view-details.component';
import { ViewCountriesComponent } from './pages/view-countries/view-countries.component';
import { HttpClientModule } from '@angular/common/http'
import { HttpService } from './http.service';
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    ViewContinentsComponent,
    ViewDetailsComponent,
    ViewCountriesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
