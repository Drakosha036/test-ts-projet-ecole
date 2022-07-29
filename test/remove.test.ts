import { Intern } from "../src/intern";
import { InternCollection } from "../src/intern-collection";

describe(
    `Removing from a collection`, () => {

        test(`Cannot remove Intern from collection`, () => {
            const intern : Intern = new Intern();
            const collection : InternCollection = new InternCollection();

            collection.add(intern);
            
            collection.remove(intern);
            expect(collection.size).toBe(1);
        })


    }
)