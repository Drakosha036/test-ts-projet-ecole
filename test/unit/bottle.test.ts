import { Bottle } from './../../src/bottle'; //le . veut dire "d'ou je suis" .. remonter un niveau

//describe - propre pour jest framework ,(entitule, ce qu'il fait)
describe(`Bottle class`, () => {

    //creer une instance de classe
    const testBottle: Bottle = new Bottle();
    

    test(
        //bon pratique de mettre `` pour pouvoir faire d'interpolation
        `Bottle should be instanciated`, () => {
            //creer une instance avec le new
            const myBottle : Bottle = new Bottle();
            //ce qu'on attend de test
            expect(myBottle).toBeInstanceOf(Bottle);
        }
    )

    test(`Bottle contenance should be 1.5`, () => {
        const myBottle : Bottle = new Bottle();
        myBottle.setContenance(1.5);
        expect(myBottle.getContenance()).toBe(1.5);
    })

    test(`Contenance must be undefined if value is not between  0.25 and 5`, () => {
        const myBottle : Bottle= new Bottle();
        myBottle.setContenance(0.15);
        expect(myBottle.getContenance()).toBeUndefined();

        myBottle.setContenance(5.1);
        expect(myBottle.getContenance()).toBeUndefined();
    })

    test(`Contenances value in the scope are valid`, () => {
        for (const contenanceValue of testBottle.getContenances()) {
            testBottle.setContenance(contenanceValue);
            expect(testBottle.getContenance()).toBe(contenanceValue);
        }
    })




    /* ne pas faire :)
    test(`Contenance must be 0.25 | 0.33 | 0.5 | 0.75 | 1 | 1.5 | 2 | 5`, () => {
        const myBottle : Bottle = new Bottle();
        myBottle.setContenance(0.25);
        expect(myBottle.getContenance()).toBe(0.25);

        myBottle.setContenance(0.33);
        expect(myBottle.getContenance()).toBe(0.33);

        myBottle.setContenance(0.5);
        expect(myBottle.getContenance()).toBe(0.5);

        myBottle.setContenance(0.75);
        expect(myBottle.getContenance()).toBe(0.75);

        myBottle.setContenance(1);
        expect(myBottle.getContenance()).toBe(1);

        myBottle.setContenance(1.5);
        expect(myBottle.getContenance()).toBe(1.5);

        myBottle.setContenance(2);
        expect(myBottle.getContenance()).toBe(2);

        myBottle.setContenance(5);
        expect(myBottle.getContenance()).toBe(5);
    })
    */

})



