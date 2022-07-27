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

    const poe1 : POE = new POE();
    poe1.id = 2;
    poe1.title = 'DevOps';
    poe1.beginDate = new Date(2022, 6, 18);
    poe1.endDate = new Date(2022, 9, 15);

    const poe3 : POE = new POE();
    poe3.id = 3;
    poe3.title = 'Helpdesk';
    poe3.beginDate = new Date(2022, 6, 18);
    poe3.endDate = new Date(2022, 9, 15);

    const POEArray : POE[] = [
        poe, poe
    ]

    const poes : POE[] = [
        poe1, poe3
    ]

    //tester que objet Intern est instancie
    test(`Intern should be intantiated`, () => {
        expect(testPOECollection).toBeInstanceOf(POECollection);
    })


    test(`Collection of poes must be empty at instanciation`, () => {
        expect(testPOECollection.getPOES().length).toBe(0);
    })

    test(`setPOE method with an array of same objects should return 1 element`, () => {
        testPOECollection.setPOES(POEArray);
        expect(testPOECollection.getPOES().length).toBe(1);
    })

    test(`setPOE must replace existing datas`, () => {
        testPOECollection.setPOES(POEArray);
        testPOECollection.setPOES(poes);

        expect(testPOECollection.getPOES().length).toBe(2);
    })

    test(`addPOE must add elements to array`, () => {
        testPOECollection.addPOE(poe, poe);
        testPOECollection.addPOE(poe1);
        testPOECollection.addPOE(poe3);

        expect(testPOECollection.getPOES().length).toBe(3);
    })
})