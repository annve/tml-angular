export class Broodje {
    constructor(public naam: string, public prijs: number) {
    };
}

export class BestelLijn {
    constructor(public broodje: Broodje, public aantal: number) {
    }
}

export class Bestelling {
    bestellijnen: BestelLijn[] = [];

    voegLijnToe(lijn: BestelLijn): void {
        this.bestellijnen.push(lijn);
    }

    totaalprijs(): number {
        let totaal: number = 0;
        for (let i = 0; i < this.bestellijnen.length; i++) {
            totaal += this.bestellijnen[i].broodje.prijs * this.bestellijnen[i].aantal;
        }
        return totaal;
    }
}