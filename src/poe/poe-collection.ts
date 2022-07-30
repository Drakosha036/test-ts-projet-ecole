import { Collection } from "../collection/collection";
import { POE } from "./poe";
export class POECollection extends Collection <POE> {

    //implementation de classe abstrait
    public remove(item: POE): void {
        //splice enleve l'element a partir d'une position, combien d'elements a enlever, si on mets pas la deuxieme parametre, ca va supprimer tout ce qui suit deriere element trouve
        this.collection.splice(
            //parcourt 
            this.collection.findIndex((inItem : POE) => inItem.id === item.id), 1
            )
        this.size = this.collection.length;
       console.log('Remove an item from the collection');

       const resultArray : POE[] = [];
       for (let index: number = 0; index < this.collection.length; index++) {
            if (this.collection[index].id !== item.id) {
                resultArray.push(this.collection[index])
            }
       }
       this.collection = [...resultArray];
    }

    /*
    //on override la methode pour specification de cette classe
    public add(poe : POE) : void {

        //findIndex retourne le premier element de tableau s'il exist dans le tableau
        const alreadyExists: boolean = this.collection.findIndex(
            //predicat = prediction
            //on parcourt le tableau par inPOE  
            (inPOE : POE) => {
                return inPOE.id === poe.id;
        }) !== -1
        //s'il n'y a pas de POE alors creer un
        if (alreadyExists === false) {
            //fait reference a la classe superieur = classe mere
            super.add(poe);
        }
    }
    */

    public add(poe : POE): void {
        if (
            this.collection.findIndex((inPoe : POE) => inPoe.id === poe.id) === -1
        ) {
            super.add(poe);
        }
    }

    public setPOES(poes : POE[]) : void {
        this.collection = [];
        for (const poe of poes) {
            //si poe n'existe pas dans le tableau - l'ajouter
            if (this.collection.includes(poe) === false) {
                this.collection.push(poe);
            }
        }
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
/*
   
    /**
     * @param poes
     * @todo Remove all duplicates from array before to store
     */
/*    public setPOES(poes : POE[]) : void {
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
/*
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
*/

   
}