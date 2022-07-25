//unique en ts si on veut utiliser le class ailleurs on rajout le mot export
export class Bottle {
    //attributs communs a toutes les bouteilles
    //contenu
    /**
     * Contenance must be a value in the folowing:
     * 0.25 | 0.33 | 0.5 | 0.75 | 1 | 1.5 | 2 | 5
     */
    private contenance: number;
    //constante d'une classe - readonly
    //creer le tableau de type number et on mets les valeurs dedans 
    //on peut ecrire Array<number> a la place de number[]
    private readonly contenances: number[] = [
        0.25, 0.33, 0.5, 0.75, 1, 1.5, 2, 5
    ]

    public packaging: string;
    public closingDevice: string;
    public isOpen: boolean;


    //methodes:
    public open() : void {
        //body
        this.isOpen = true;
    }

    public close() : void {
        //body
        this.isOpen = false;
    }

    //les accesseurs getter setter
    public getContenance() : number {
        return this.contenance;
    }

    public getContenances() : number[] {
        return this.contenances;
    }

    public setContenance(contenance: number) : void {
        if (contenance >= 0.25 && contenance <= 5) {
            if (
                //si l'indexOf est present dans le tableau envoi l'index sinon -1
                this.contenances.indexOf(contenance) !== -1
            ) {
                //affecter la valeur
                this.contenance = contenance;
            }
        }
    }


/*
    //ca fonctionne , mais si regles de jeu change, c'est pas gerable
    public setContenance(contenance: number) : void {
        if (contenance === 0.25 || 
            contenance === 0.33 || 
            contenance === 0.5 || 
            contenance === 0.75 || 
            contenance === 1 || 
            contenance === 1.5 || 
            contenance === 2 || 
            contenance === 5) {

            this.contenance = contenance;
        }
    }
    */


}