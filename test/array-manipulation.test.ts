import { ArrayManipulation } from "../src/array-manipulations/array-manipulations/array-manipulation";

describe(
    `Array Manipulation test suite`, () => {

        const numbers = [ 15, 10, 23, 58, 1, 3, 9];
        const arrayManipulation = new ArrayManipulation();

        arrayManipulation.setNumbers(numbers);

        //pas le droit utiliser les fonctions de tableau
        test(`numbers attribute should have 7 elements`, () => {
            // your logic here
            
            expect(arrayManipulation.countNumbers()).toBe(7);
        })

        test(`Sum of numbers value in attribute must be 119`, () => {
            // your logic here
            
            expect(arrayManipulation.sumOfNumbers()).toBe(119);
        })

        test(`Min of numbers must be 1`, () => {
            // your logic here
            
            expect(arrayManipulation.minOfNumbers()).toBe(1);
        })

        test(`Max of numbers must be 58`, () => {
            // your logic here
            
            expect(arrayManipulation.maxOfNumbers()).toBe(58);
        })

        test(`Find an element with indice`, () => {
            // your logic here
            
            expect(arrayManipulation.getNiemeNumber(2)).toBe(23);
        })
    }
    
)