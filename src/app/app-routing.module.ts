import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewContinentsComponent } from './pages/view-continents/view-continents.component';
import { ViewCountriesComponent } from './pages/view-countries/view-countries.component';
import { ViewDetailsComponent } from './pages/view-details/view-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/continents', pathMatch: 'full' },
  { path: 'continents', component: ViewContinentsComponent },
  { path: 'countries/:region', component: ViewCountriesComponent },
  { path: 'details/:country', component: ViewDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
