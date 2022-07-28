
import { Intern } from "../src/intern";
import { InternCollection } from "../src/intern-collection";

describe(
    `Collection test suite`, () => {

        test(`Collection should only accept Intern object`, () => {
            const collection : InternCollection = new InternCollection();
            collection.add(new Intern());

            expect(collection.size).toBe(1);
        })

        test(`Object in the collection should be an Intern instance`, () => {
            const collection : InternCollection = new InternCollection();
            const intern : Intern = new Intern();

            intern.id = 1;
            intern.setLastName('Aubert');

            collection.add(intern);

            // const internsArray = collection.getCollection();
            // const internInArray = internsArray[0];


            expect(collection.getCollection()[0]).toBeInstanceOf(Intern);
        })


    }
)