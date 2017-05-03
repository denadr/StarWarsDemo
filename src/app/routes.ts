import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PeopleComponent } from './components/people.component';
import { FilmsComponent } from './components/films.component';
import { SpeciesComponent } from './components/species.component';
import { PlanetsComponent } from './components/planets.component';
import { StarshipsComponent } from './components/starships.component';
import { VehiclesComponent } from './components/vehicles.component';

const routes: Routes = 
[
  { path: '', redirectTo: '/people', pathMatch: 'full' },
  { path: 'people',     component: PeopleComponent },
  { path: 'species',    component: SpeciesComponent },
  { path: 'films',      component: FilmsComponent },
  { path: 'planets',    component: PlanetsComponent },
  { path: 'starships',  component: StarshipsComponent },
  { path: 'vehicles',   component: VehiclesComponent },
];

@NgModule
({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }