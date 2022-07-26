import { POE } from "./poe";

//creer une classe
/**
 * private poes : POE[];
 * private size : number;
 * 
 * public addPOE(poe : POE) : void {}
 * 
 * public getSize() : number {}
 * 
 */

export class POECollection {
    private poes : POE[];
    private size : number;

    public constructor() {
        //init tableau de poe et size
        this.poes = [];
        this.size = 0; 
    }

    //Faire en sorte qu'on ne puisse pas avoir deux fois la même POE dans la collection
    public addPOE(poe : POE) : void {
        //s'assurer que la POE est unique
        let poeExist = false;
        //parcourir le tableau pour savoir si POE exist
        for (const existingPOE of this.poes) {
            //si oui, faire sortir de la boucle
            if (existingPOE.getId === poe.getId) {
                poeExist = true;
            }
        }
        //si POE n'existe pas, ajouter au tableau
        if (poeExist === false) {
            this.setPOE(poe);
            this.size = this.size + 1;
        }

    }


    //accessors
    public getSize() : number {
        return this.size;
    }

    public getPOE() : POE[] {
        return this.poes;
    }

    public setSize(size : number) : void {
        this.size = size;
    }

    public setPOE(poe : POE) : void {
        this.poes.push(poe);
    }

   
}