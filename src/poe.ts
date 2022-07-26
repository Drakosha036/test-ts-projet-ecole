//creer une classe POE

export class POE {
    private id : number;
    public title : string;
    private beginDate : Date;
    private endDate : Date;

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
    
    /**
     * Faire en sorte qu'une POE ne puisse pas avoir 
     * une date de début supérieure à la date de fin,
     * 
    */
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