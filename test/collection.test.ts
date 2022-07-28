
import { Intern } from "../src/intern";
import { InternCollection } from "../src/intern-collection";
import { POE } from "../src/poe/poe";
import { POECollection } from "../src/poe/poe-collection";

describe(
    `Collection test suite`, () => {
        test(`Collection should be Instanciated`, () => {
            const collection : InternCollection = new InternCollection();
            expect(collection).toBeInstanceOf(InternCollection);
        })

        test(`Collection should only accept Intern object`, () => {
            const collection : InternCollection = new InternCollection();
            collection.add(new Intern());

            expect(collection.size).toBe(1);
        })

        test(`Object a l'indice 0 in the collection should be an Intern instance`, () => {
            const collection : InternCollection = new InternCollection();
            const intern : Intern = new Intern();

            intern.id = 1;
            intern.setLastName('Aubert');

            collection.add(intern);
            //version longue
            // const internsArray = collection.getCollection();
            // const internInArray = internsArray[0];


            expect(collection.getCollection()[0]).toBeInstanceOf(Intern);
        })


        test(`Collection should be Instanciated`, () => {
            const collection : POECollection = new POECollection();
            expect(collection).toBeInstanceOf(POECollection);
        })

        test(`Collection should only accept POE object`, () => {
            const collection : POECollection = new POECollection();
            collection.add(new POE());

            expect(collection.size).toBe(1);
        })

        test(`Collection should not accept doublicates`, () => {
            const collection : POECollection = new POECollection();
            
            collection.add(new POE());
            collection.add(new POE());

            expect(collection.size).toBe(1);
        })

        test(`Object a l'indice 0 in the collection should be an POE instance`, () => {
            const collection : POECollection = new POECollection();
            const poe : POE = new POE();

            poe.id = 1;
            poe.title = 'Fullstack';

            collection.add(poe);

            expect(collection.getCollection()[0]).toBeInstanceOf(POE);
        })
    }
)