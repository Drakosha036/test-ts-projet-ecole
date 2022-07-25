import { Bottle } from './../../src/bottle'; //le . veut dire "d'ou je suis" .. remonter un niveau

//describe - propre pour jest framework ,(entitule, ce qu'il fait)
describe(`Bottle class`, () => {
    test(
        //bon pratique de mettre `` pour pouvoir faire d'interpolation
        `Bottle should be instanciated`, () => {
            //creer une instance avec le new
            const myBottle : Bottle = new Bottle();
            //ce qu'on attend de test
            expect(myBottle).toBeInstanceOf(Bottle);
        }
    )
})

