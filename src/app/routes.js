"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var people_component_1 = require("./components/people.component");
var films_component_1 = require("./components/films.component");
var species_component_1 = require("./components/species.component");
var planets_component_1 = require("./components/planets.component");
var starships_component_1 = require("./components/starships.component");
var vehicles_component_1 = require("./components/vehicles.component");
var routes = [
    { path: '', redirectTo: '/people', pathMatch: 'full' },
    { path: 'people', component: people_component_1.PeopleComponent },
    { path: 'species', component: species_component_1.SpeciesComponent },
    { path: 'films', component: films_component_1.FilmsComponent },
    { path: 'planets', component: planets_component_1.PlanetsComponent },
    { path: 'starships', component: starships_component_1.StarshipsComponent },
    { path: 'vehicles', component: vehicles_component_1.VehiclesComponent },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forRoot(routes)],
        exports: [router_1.RouterModule]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=routes.js.map