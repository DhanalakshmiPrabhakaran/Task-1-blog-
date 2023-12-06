//write a class to calculate the uber price.
class UberPrice {
    constructor(kilometer) {
      this.kilometer = kilometer;
      
    }
    //returns price
    getPrice() {
      return (this.kilometer ) *20;
    }
  }
  
  let uber = new UberPrice(10);
  console.log("Price:",uber.getPrice());

