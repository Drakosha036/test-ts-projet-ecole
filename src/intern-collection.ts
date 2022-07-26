import { Intern } from "./intern";

export class InternCollection {
    //attributs
    private interns : Intern[]; //le tableau est declare mais pas defini

    //constructor est appelle des que on appel new InternCollection()
    public constructor() {
        //on initialise le tableau d'interns
        this.interns = []; //le tableau maintenant est defini
    };


    //methods
    public addIntern(intern: Intern) : void {

    }

    public removeIntern(intern : Intern) : void {

    }

    public updateIntern(intern : Intern) : void {

    }

    public getInterns() : Intern[] {
        return this.interns;
    }
}