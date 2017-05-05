import { Component, OnInit } from '@angular/core';

import { VehiclesService } from '../services/VehiclesService';

@Component
({
    selector : 'star-wars-vehicles',
    templateUrl : './vehicles.component.html',
    providers : [ VehiclesService ]
})
export class VehiclesComponent implements OnInit
{
    public vehicles : any[];

    constructor(private _service : VehiclesService) { }
    
    ngOnInit(): void 
    {
        this._service.get().subscribe(vehicles => this.vehicles = vehicles);
    }
}