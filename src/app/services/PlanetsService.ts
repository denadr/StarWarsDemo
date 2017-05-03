import { StarWarsService } from './StarWarsService';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PlanetsService extends StarWarsService
{
    constructor(protected _http : Http)
    {
        super(_http);
    }

    get() : Observable<any[]>
    {
        return super.getFrom('planets/');
    }
}