import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';
import { RoutingModule } from './routing.module';

import { AppComponent }       from './app.component';
import { HomeComponent }      from './components/home.component';
import { PeopleComponent }    from './components/people.component';
import { FilmsComponent }     from './components/films.component';
import { PlanetsComponent }   from './components/planets.component';
import { SpeciesComponent }   from './components/species.component';
import { StarshipsComponent } from './components/starships.component';
import { VehiclesComponent }  from './components/vehicles.component';


@NgModule
({
  imports: [ 
    BrowserModule,
    HttpModule,
    RoutingModule
  ],
  declarations: [ 
    AppComponent,
    HomeComponent,
    PeopleComponent,
    FilmsComponent,
    PlanetsComponent,
    SpeciesComponent,
    StarshipsComponent,
    VehiclesComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
