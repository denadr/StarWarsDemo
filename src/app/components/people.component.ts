import { Component, OnInit } from '@angular/core';

import { PeopleService } from '../services/PeopleService';

@Component
({
    selector : 'star-wars-people',
    templateUrl : './people.component.html',
    providers : [ PeopleService ]
})
export class PeopleComponent implements OnInit
{
    public people : any[];

    constructor(private _service : PeopleService) { }
    
    ngOnInit(): void 
    {
        this._service.get().subscribe(people => this.people = people);
    }
}