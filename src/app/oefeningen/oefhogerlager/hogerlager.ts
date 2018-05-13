export class HogerLager {
    teRaden: number = 1 + Math.floor(Math.random() * 100);
    aantalBeurten: number = 0;
    geraden: boolean = false;

    constructor() { }

    verwerkGok(gok: number): string {
        this.aantalBeurten++;
        if (this.teRaden < gok) {
            return "Lager";
        }
        if (this.teRaden > gok) {
            return "Hoger";
        }
        else {
            this.geraden = true;
            return "Juist";
        }
    };

    reset(): void {
        this.geraden = false;
        this.aantalBeurten = 0;
        this.teRaden = 1 + Math.floor(Math.random() * 100);
    };
}