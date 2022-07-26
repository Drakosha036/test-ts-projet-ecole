import { Intern } from "./intern";

export class InternCollection {
    //attributs
    //egalement on peut ecrire: private interns : Array<Intern>
    private interns : Intern[]; //le tableau est declare mais pas defini
    public size : number;

    //constructor est appelle des que on appel new InternCollection()
    public constructor() {
        //on initialise le tableau d'interns
        this.interns = []; //le tableau maintenant est defini
        //le meme chose: this.interns = new Array<Intern>()

        //init l'attribut size
        this.size = 0;
    };


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

        for (const existingIntern of this.interns) {
            if (existingIntern.id === intern.id) {
                alreadyExist = true;
                //break; //pas la bonne idee, car pas tout les langages qui support break
            }
        }

        //si interns n'existe pas dans le tableau on l'ajout
        if (alreadyExist === false) {
            //on ajout intern dans un tableau des interns
            this.interns.push(intern);
            this.size = this.size + 1; //attention this.size++ ne fonctionne pas!
        }

        
    }

    public removeIntern(intern : Intern) : void {
        this.size = this.size--;

    }

    public updateIntern(intern : Intern) : void {

    }

    public getInterns() : Intern[] {
        return this.interns;
    }

    /**
     * Challenge:
     * Ajouter un attribut public "size" de type number
     * dans la classe InternCollection
     * Cet attribut stockera le nombre d'elements de l'attribut "interns"
     * de cette classe
     * 
     * 
     * /!\ pensez a incrementer l'attribut size au bon moment! - dans les methodes
     * /!\ pensez a initialiser l'attribut size au bon moment! - dans le constructeur
     *  
     */
    
}