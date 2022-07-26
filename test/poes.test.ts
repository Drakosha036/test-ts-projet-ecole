import { POECollection } from "../src/poe-collection";


describe(`POECollection class`, () => {
    const testPOECollection : POECollection = new POECollection();

    //tester que objet Intern est instancie
    test(`Intern should be intantiated`, () => {
        expect(testPOECollection).toBeInstanceOf(POECollection);
    })

    
})