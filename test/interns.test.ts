import { InternCollection } from "../src/intern-collection"


describe(`Interns collection test suite`, () => {
    //on cree la constante ou on stock l'instance de InternCollection
    const internCollection : InternCollection = new InternCollection();
    

    test(`Should have 0 elements after constructor`, () => {
        //verifier si la longeur de tableau retourne par getInterns est vide
        expect(internCollection.getInterns().length).toBe(0);
    })
    
}) 