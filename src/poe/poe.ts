//creer une classe POE

export class POE {
    //convention pour montrer que l'attribut est private
    private _id : number;
    public title : string;
    private _beginDate : Date;
    private _endDate : Date;

    public get beginDate(): Date {
        return this._beginDate;
    }

    public set beginDate(beginDate: Date) {
        this._beginDate = beginDate;
    }

    public get endDate(): Date {
        return this._endDate;
    }

    public set endDate(endDate: Date) {
        this._endDate = endDate;
    }



    //setter "magique" set attribut(parametre : type)
    //permet d'acceder a methode par attribut
    //grace a methodes "magique on cache les noms des attributs"
    public set id(id : number) {
        if (this._id === undefined) {
            this._id = id;
        }
    }

    public get id() : number {
        return this._id;
    }

    //setter et getter classique

    public setId(id : number) : void {
        if (this._id === undefined) {
            this._id = id;
        }
    }
    
    public getId() : number | undefined {
        return this._id;
    }

    
    /*

    public constructor() {
        this.id = 0;
        this.beginDate = new Date();
        this.endDate = new Date();
    }

    public setId(id : number) : void {
        this.id = id;
    }
    
    public getId() : number {
        return this.id;
    }
    
*/

    /**
     * Faire en sorte qu'une POE ne puisse pas avoir 
     * une date de début supérieure à la date de fin,
     * 
    */
   /*
    public setBeginDate(date : Date) : void {
        let start = this.beginDate; //.toString();
        let end = this.endDate; //.toString();
        let isBigger = false;
        if (start > end) {
            isBigger = true;
        }
        if (isBigger === false) {
            this.beginDate = date;
        }
        
    }
    
    public getBeginDate() : Date {
        return this.beginDate;
    }
    
    public setEndDate(date : Date) : void {
        this.endDate = this.endDate;
    }
    
    public getEndDate() : Date {
        return this.endDate;
    }
    */

}
/**
 * POE:
 * private id : number;
 * public title : string;
 * private beginDate : Date;
 * private endDate : Date;
 * 
 * 
 * public setId(id : number) : void {}
 * 
 * public getId() : number {}
 * 
 * public setBeginDate(date : Date) : void {}
 * 
 * public getBeginDate() : Date {}
 * 
 * public setEndDate(date : Date) : void {}
 * 
 * public getEndDate() : Date {}
 */