"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var routes_1 = require("./routes");
var app_component_1 = require("./app.component");
var people_component_1 = require("./components/people.component");
var films_component_1 = require("./components/films.component");
var planets_component_1 = require("./components/planets.component");
var species_component_1 = require("./components/species.component");
var starships_component_1 = require("./components/starships.component");
var vehicles_component_1 = require("./components/vehicles.component");
var PeopleService_1 = require("./services/PeopleService");
var FilmsService_1 = require("./services/FilmsService");
var PlanetsService_1 = require("./services/PlanetsService");
var SpeciesService_1 = require("./services/SpeciesService");
var StarshipsService_1 = require("./services/StarshipsService");
var VehiclesService_1 = require("./services/VehiclesService");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            http_1.HttpModule,
            routes_1.AppRoutingModule
        ],
        declarations: [
            app_component_1.AppComponent,
            people_component_1.PeopleComponent,
            films_component_1.FilmsComponent,
            planets_component_1.PlanetsComponent,
            species_component_1.SpeciesComponent,
            starships_component_1.StarshipsComponent,
            vehicles_component_1.VehiclesComponent
        ],
        bootstrap: [app_component_1.AppComponent],
        providers: [
            PeopleService_1.PeopleService,
            FilmsService_1.FilmsService,
            PlanetsService_1.PlanetsService,
            SpeciesService_1.SpeciesService,
            StarshipsService_1.StarshipsService,
            VehiclesService_1.VehiclesService
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map