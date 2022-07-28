//grace au abstrait on ne peut pas faire ne Collection, 
//c'est oblige faire implementation de classe fille de ce classe
export abstract class Collection {
    protected collection : any[] = [];
    public size : number = 0;
    //la meme chose
    //protected collection : Array<> new Array<>();

    public getCollection() : any[] {
        return this.collection;
    }

    //que ici on utilise any pour permettre tout les types
    public add(item : any) : void {
        
        this.collection.push(item);
        this.size = this.size + 1;
    }

}