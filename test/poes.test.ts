import { POE } from "../src/poe/poe";
import { POECollection } from "../src/poe/poe-collection";


describe(`POE Collection test suite`, () => {
    const testPOECollection : POECollection = new POECollection();

    //mock
    const poe : POE = new POE();
    poe.id = 1;
    poe.title = 'Fullstack';
    poe.beginDate = new Date(2022, 6, 18);
    poe.endDate = new Date(2022, 9, 15);
    const POEArray : POE[] = [
        poe, poe
    ]

    //tester que objet Intern est instancie
    test(`Intern should be intantiated`, () => {
        expect(testPOECollection).toBeInstanceOf(POECollection);
    })


    test(`Collection of poes must be empty at instanciation`, () => {
        expect(testPOECollection.getPOE().length).toBe(0);
    })

    test(`setPOE method with an array of same objects should return 1 element`, () => {
        testPOECollection.setPOE(POEArray);
        expect(testPOECollection.getPOE().length).toBe(1);
    })
})