export class Collection {
    protected collection : any[] = [];
    //la meme chose
    //protected collection : Array<> new Array<>();

    public getCollection() : any[] {
        return this.collection;
    }

    //que ici on utilise any pour permettre tout les types
    public add(item : any) : void {
        this.collection.push(item);
    }

}