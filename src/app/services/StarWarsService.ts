import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export abstract class StarWarsService
{
    protected readonly _baseUrl : string = 'http://swapi.co/api/';

    constructor(protected _http : Http) { }

    protected getFrom(api : string) : Observable<any[]>
    {
        var url : string = this._baseUrl.concat(api);
        var response : Observable<Response> = this._http.get(url);
        var json : Observable<any> = response.map((res : Response) => res.json());
        var results : Observable<any[]> = json.map(obj => obj.results);
        return results;
    }
    
    public abstract get() : Observable<any[]>;
}