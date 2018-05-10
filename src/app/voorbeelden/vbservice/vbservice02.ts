// stap 2:
// service gebruikt HttpClient om objecten op te vragen
// en stuurt array met objecten terug
// probl:  door async karakter van http.get geeft getScholen steeds lege array terug
// opl:  vbservice03

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { School } from './model';

// Injectable => client moet object niet zelf maken
@Injectable()
export class VbScholenService02 {
    private scholen: School[] = [];

    getScholen():School[] {
        return this.scholen;  // probleem: nog leeg (async) !!!
    }

    constructor(private http: HttpClient) {
        http.get("http://datasets.antwerpen.be/v4/gis/secundaireschool.json").subscribe(
            data => { 
                this.scholen= [];
                data["data"].forEach(element => {
                        this.scholen.push(new School(
                            element.naam, element.straat + " "+ element.huisnummer,
                            element.postcode, element.district
                        ));
                /**/ console.dir(this.scholen); //ok 
            })},
            error => {
                console.log("Er is iets fout gelopen tijdens het opvragen van de gegevens.");
                console.log(error.message);
              }
        );
    }

}