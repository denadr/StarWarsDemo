import { Component, OnInit } from '@angular/core';

import { StarshipsService } from '../services/StarshipsService';

@Component
({
    selector : 'star-wars-starships',
    templateUrl : './starships.component.html'
})
export class StarshipsComponent implements OnInit
{
    public starships : any[];

    constructor(private _service : StarshipsService) { }
    
    ngOnInit(): void 
    {
        this._service.get().subscribe(starships => this.starships = starships);
    }
}