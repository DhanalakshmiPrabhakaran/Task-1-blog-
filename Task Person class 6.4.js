//Write a “person” class to hold all the details.
class Person{
    constructor(Name,Heigth,Weigth,Age,Colour,Qualification,City, State){
        this.Name=Name;
        this.Heigth=Heigth;
        this.Weigth=Weigth;
        this.Age=Age;
        this.Colour=Colour;
        this.Qualification=Qualification;
        this.City=City;
        this.State=State;
    }
    details(){
        console.log(`
        Name:${this.Name}
        Height:${this.Heigth}
        Weight:${this.Weigth}
        Age:${this.Age}
        Color:${this.Colour}
        Qualification:${this.Qualification}
        City:${this.City}
        State:${this.State}`)
    }
}
let Person1=new Person("Dhanalakshmi Prabhakaran","5.5","70","29","White","B.E","TRICHY","TAMIL NADU")
Person1.details()

