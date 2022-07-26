import { POE } from "../src/poe";

describe(`POE class`, () => {
    const testPOE : POE = new POE();

    //tester que objet Intern est instancie
    test(`Intern should be intantiated`, () => {
        expect(testPOE).toBeInstanceOf(POE);
    })
/*
    test(`Begin date must be less than End Date`, () => {
        const dateStart = new Date('2020-10-20');
        const dateEnd = new Date('2021-04-30');
        expect()
    })
    */
})