export class ArrayManipulation {
    private numbers : number[];

    public setNumbers(numbers : number[]) : void {
        this.numbers = numbers;
    }

    public getNumbers() : number[] {
        return this.numbers;
    }

    public getNiemeNumber(indice : number) : number {
        if (indice < this.numbers.length) {
            return this.numbers[indice];
        }
        //si la condition est fausse lever une exception
        throw new Error(`L'indice est en dehors des limites : ${this.numbers.length - 1}`);
    }

    public countNumbers() {
        return this.numbers.length;

        /*
        //si on ne peut pas utiliser les fonctions de tableau faire suivant:
        let nbElements =0;
        for (const number of this.numbers) {
            nbElements = nbElements +1;
        }
        return nbElements
*/
    }

    public sumOfNumbers() : number {
        let sum = 0;

        for (const number of this.numbers) {
            sum = sum + number;
        }
        return sum;
    }

    public minOfNumbers() : number {
        let minValue = this.numbers[0];
/*
//version 1
        for (let i = 1; i < this.numbers.length; i++) {
            if (this.numbers[i] < minValue) {
                minValue = this.numbers[i];
            }
        }
*/

        //version2 
        for (const number of this.numbers) {
            if (number <= minValue) {
                minValue = number;
            } 
        }
        return minValue;

        //version3 court en utilisant sort() qui tri le tableau et return la valeur de premier element de tableau
        //return this.numbers.sort()[0];
    }

    public maxOfNumbers() : number {
        let maxValue = this.numbers[0];
        for (const number of this.numbers) {
            if (number >= maxValue) {
                maxValue = number;
            } 
        }
        return maxValue;
    }

    
}