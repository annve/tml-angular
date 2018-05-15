// stap 1:  
// Service -> @Injectable
// + in app.module.ts:  klassennaam toevoegen aan array met providers
// service geeft array met "zelf gemaakte" School objecten

import { Injectable } from '@angular/core';
import { School } from './model';

// Injectable => client moet object niet zelf maken
@Injectable()
export class VbScholenService01 {
    // bron: http://datasets.antwerpen.be/v4/gis/secundaireschool.json
    // mockup data:
    SECUNDAIRE_SCHOLEN = [
        new School("Koninklijke Balletschool Antwerpen", "Maria Pijpelincxstraat 1", "2000", "Antwerpen"),
        new School("Don Bosco Technisch Instituut", "Salesianenlaan 1", "2660", "Hoboken"),
        new School("Sint-Annacollege - Middenschool", "Willem Gijsselsstraat 1", "2050", "Antwerpen"),
        new School("Vrije Israelitische school voor Secundair Onderwijs Yavne", "Stoomstraat 11", "2018", "Antwerpen"),
        new School("Koninklijk Atheneum Berchem", "Melgesdreef 113", "2170", "Merksem")
    ];

    getScholen(): School[] {
        return this.SECUNDAIRE_SCHOLEN;
    }

    constructor() {
    }
}


