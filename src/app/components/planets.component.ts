import { Component, OnInit } from '@angular/core';

import { PlanetsService } from '../services/PlanetsService';

@Component
({
    selector : 'star-wars-planets',
    templateUrl : './planets.component.html'
})
export class PlanetsComponent implements OnInit
{
    public planets : any[];

    constructor(private _service : PlanetsService) { }
    
    ngOnInit(): void 
    {
        this._service.get().subscribe(planets => this.planets = planets);
    }
}