import { POE } from "../src/poe/poe";

describe(`POE class test suite`, () => {
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

    test(`POE id must be 1`, () => {
        const poe : POE = new POE();
        poe.id = 1;
        expect(poe.id).toBe(1);
    })

    test(`id of a POE Object could not be updated`, () => {
        const poe : POE = new POE();
        poe.id = 1;
        poe.id = 2;

        expect(poe.id).toBe(1);
    })
})