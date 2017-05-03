import { Component, OnInit } from '@angular/core';

import { SpeciesService } from '../services/SpeciesService';

@Component
({
    selector : 'star-wars-species',
    templateUrl : './species.component.html'
})
export class SpeciesComponent implements OnInit
{
    public species : any[];

    constructor(private _service : SpeciesService) { }
    
    ngOnInit(): void 
    {
        this._service.get().subscribe(species => this.species = species);
    }
}