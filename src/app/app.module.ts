import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';
import { RoutingModule } from './routing.module';

import { AppComponent }       from './app.component';
import { PeopleComponent }    from './components/people.component';
import { FilmsComponent }     from './components/films.component';
import { PlanetsComponent }   from './components/planets.component';
import { SpeciesComponent }   from './components/species.component';
import { StarshipsComponent } from './components/starships.component';
import { VehiclesComponent }  from './components/vehicles.component';

import { PeopleService }    from './services/PeopleService';
import { FilmsService }     from './services/FilmsService';
import { PlanetsService }   from './services/PlanetsService';
import { SpeciesService }   from './services/SpeciesService';
import { StarshipsService } from './services/StarshipsService';
import { VehiclesService }  from './services/VehiclesService';


@NgModule
({
  imports: [ 
    BrowserModule,
    HttpModule,
    RoutingModule
  ],
  declarations: [ 
    AppComponent,
    PeopleComponent,
    FilmsComponent,
    PlanetsComponent,
    SpeciesComponent,
    StarshipsComponent,
    VehiclesComponent
  ],
  bootstrap: [ AppComponent ],
  providers: [ 
    PeopleService,
    FilmsService,
    PlanetsService,
    SpeciesService,
    StarshipsService,
    VehiclesService
  ]
})
export class AppModule { }
