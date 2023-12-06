//Convert the UML diagram to Typescript class
let pi=3.1412;
class circle{
    constructor(radius,color){
        this.radius=radius;
        this.color=color;
        
        }
        setColor(color)
        {
       return this.color=color;
        }
        setRadius(radius)
        {
       return this.radius=radius;
    }
        getRadius()
        {
        return this.radius;
        }
        getcolor(){
            return this.color;
            
        }
        tostring() {
            return ('[radius = ' + this.radius + ',color = ' + this.color + ']')
        }
        getarea(){
          return pi*this.radius*this.radius;
        }
        getcircumference(){
            return 2*pi*this.radius;
        }
}
let a=new circle(1.0,"red");
console.log(a.setRadius(1.0))
console.log(a.setColor("red"))
console.log('Circle : ' + a.tostring())
console.log("circle Radius:",a.getRadius())
console.log("circle color:",a.getcolor())
console.log("circle Area:",a.getarea())
console.log("circle circumference:",a.getcircumference())

