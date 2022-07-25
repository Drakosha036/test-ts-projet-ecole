//unique en ts si on veut utiliser le class ailleurs on rajout le mot export
export class Bottle {
    //attributs communs a toutes les bouteilles
    //contenu
    contenance: number;
    packaging: string;
    closingDevice: string;
    isOpen: boolean;


    //methodes:
    open() : void {
        //body
        this.isOpen = true;
    }

    close() : void {
        //body
        this.isOpen = false;
    }
}