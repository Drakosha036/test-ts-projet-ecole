import { Collection } from "./collection/collection";
import { Intern } from "./intern";

export class InternCollection extends Collection {
    //attributs
    public size : number = 0;

    //methods
    public addIntern(intern: Intern) : void {
        /** si on ecrit comme ca, obligatoirement commenter pour la lisibilite
         * 
        if (this.interns.filter(obj: Intern) => obj.id === intern.id).length === 0) {
            this.interns.push(intern);
            this.size = this.size + 1;
        }
        */


        //creer boolean et l'initialiser a false 
        let alreadyExist = false;

        for (const existingIntern of this.collection) {
            if (existingIntern.id === intern.id) {
                alreadyExist = true;
                //break; //pas la bonne idee, car pas tout les langages qui support break
            }
        }

        //si interns n'existe pas dans le tableau on l'ajout
        if (alreadyExist === false) {
            //on ajout intern dans un tableau des interns
            this.collection.push(intern);
            this.size = this.size + 1; //attention this.size++ ne fonctionne pas!
        }

        
    }

    public removeIntern(intern : Intern) : void {
        this.size = this.size--;

    }

    public updateIntern(intern : Intern) : void {

    }
    
}