export class Intern {
    public id : number;
    private lastName : string;
    private firstName : string;
    private birthDate : string;
    private phone : string;
    private email : string;

     

    public getLastName() : string {
        return this.lastName;
    }

    public getFirstName() : string {
        return this.firstName;
    }

    public getBirthDate() : string {
        return this.birthDate;
    }

    public getPhone() : string {
        return this.phone;
    }

    public getEmail() : string {
        return this.email;
    }

    public setLastName(lastName : string) : void {
        this.lastName = lastName.toUpperCase();
    }

    public setFirstName(firstName : string) : void {
        this.firstName = firstName.toUpperCase();
    }
}