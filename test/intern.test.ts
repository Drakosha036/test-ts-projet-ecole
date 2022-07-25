import { Intern } from './../src/intern';

describe(`Intern class`, () => {

    const testIntern : Intern = new Intern();
    

    //tester que objet Intern est instancie
    test(`Intern should be intantiated`, () => {
        expect(testIntern).toBeInstanceOf(Intern);
    })

    test(`Last name should be Aubert`, () => {
        testIntern.setLastName('Aubert');
        expect(testIntern.getLastName()).toBe('Aubert');
    })

    test(`First name should be Jean-Luc`, () => {
        testIntern.setFirstName('Jean-Luc');
        expect(testIntern.getFirstName()).toBe('Jean-Luc');
    })

    test(`First letter of Last name must be capital letter`, () => {
        //Nom doit etre en majuscule
        expect(testIntern.getLastName()).toBe('aubert'.toUpperCase());
    })

    test(`First letter of First name must be capital letter`, () => {
        //Nom doit etre en majuscule
        expect(testIntern.getFirstName()).toBe('jean-luc'.toUpperCase());
    })
})