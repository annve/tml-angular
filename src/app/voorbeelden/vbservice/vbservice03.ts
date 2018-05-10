// stap 3
// getScholen geeft Observable terug

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
// Observable => wijzigingen aan observable worden gemeld aan subscribers
import { School } from './model';

// Injectable => client moet object niet zelf maken
@Injectable()
export class VbScholenService03 {
     getScholen():Observable<School[]> {
        return this.http.get<School[]>("http://datasets.antwerpen.be/v4/gis/secundaireschool.json");
     }
 
     constructor(private http: HttpClient) {
     }
}