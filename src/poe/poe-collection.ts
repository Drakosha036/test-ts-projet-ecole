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
/*
    //Faire en sorte qu'on ne puisse pas avoir deux fois la même POE dans la collection
    public addPOE(poe : POE) : void {
        //s'assurer que la POE est unique
        let poeExist = false;
        //parcourir le tableau pour savoir si POE exist
        for (const existingPOE of this.poes) {
            //si oui, faire sortir de la boucle
            if (existingPOE.getId() === poe.getId()) {
                poeExist = true;
            }
        }
        //si POE n'existe pas, ajouter au tableau
        if (poeExist === false) {
            this.setPOE(this.poes);
            this.size = this.size + 1;
        }

    }

*/
    //accessors
    public getSize() : number {
        return this.size;
    }

    public getPOES() : POE[] {
        return this.poes;
    }

    public setSize(size : number) : void {
        this.size = size;
    }

    /**
     * @param poes
     * @todo Remove all duplicates from array before to store
     */
    public setPOES(poes : POE[]) : void {
        ////1-er approche
        //const unique = [...new Set(poes)];
        //this.poes = unique;
/*
        ////2-eme approche
        for (const poe of poes) {
            //si existe changer la valeur de isPOE
           // if (this.poes.includes(poe)) {
            //}
            let alreadyExists = false;
            //parcourir le tableau
            for (const existingPOE of this.poes) {
                //si l'element existe, faire rien
                if (existingPOE.getId() === poe.getId()) {
                    alreadyExists = true;
                    break;
                }
            }
            //si l'element n'existe pas on l'ajout
            if (alreadyExists === false) {
                this.poes.push(poe);
            }
        }
        */

        ////3-eme approche
        //vider le tableau
        this.poes = [];
        for (const poe of poes) {
            //si poe n'existe pas dans le tableau - l'ajouter
            if (this.poes.includes(poe) === false) {
                this.poes.push(poe);
            }
        }
    }

    //fonction pour ajouter les nouveaux element dans le tableau
    public addPOE(...args : POE[]) : void {
        for (const poe of args) {
            //si poe n'existe pas dans le tableau - l'ajouter
            if (this.poes.includes(poe) === false) {
                this.poes.push(poe);
            }
        }
    }


   
}