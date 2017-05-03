import { Component, OnInit } from '@angular/core';

import { FilmsService } from '../services/FilmsService';

@Component
({
    selector : 'star-wars-films',
    templateUrl : './films.component.html'
})
export class FilmsComponent implements OnInit
{
    public films : any[];

    constructor(private _service : FilmsService) { }
    
    ngOnInit(): void 
    {
        this._service.get().subscribe(films => this.films = films);
    }
}