import { Intern } from "../src/intern";
import { InternCollection } from "../src/intern-collection"


describe(`Interns collection test suite`, () => {
    //on cree la constante ou on stock l'instance de InternCollection
    const internCollection : InternCollection = new InternCollection();
    

    test(`Should have 0 elements after constructor`, () => {
        //verifier si la longeur de tableau retourne par getInterns est vide
        expect(internCollection.getCollection().length).toBe(0);
    })
    
    test(`Collection length must be 1 after push an Intern object`, () => {
        //creer l'objet de colletion et ajouter l'objet intern
        const collection : InternCollection = new InternCollection();
        const intern : Intern = new Intern();
        intern.id = 1;
        intern.setLastName('Aubert');
        
        //ajouter intern dans la collection
        collection.add(intern);
        collection.add(intern);

        //verifier que apres affectation la longeur de tableau est egal a 1
        expect(collection.getCollection().length).toBe(1);
        expect(collection.size).toBe(1);
    })

    test(`the number of elements in the array must be 0`, () => {
        expect(internCollection.size).toBe(0);
    })
}) 