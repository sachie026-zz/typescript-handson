class Vehicle {
  tyres: number | undefined;
  brand: string | undefined;

  constructor(brand: string) {
    this.brand = brand;
  }

  setData(tyresData: number, brand: string) {
    this.tyres = tyresData;
    this.brand = brand;
  }

  getTyres() {
    return this.tyres;
  }

  getBrand() {
    return this.brand;
  }
}

let vehicleInstance1 = new Vehicle("Honda");
// vehicleInstance1.setData(4, "Honda");

class Bike extends Vehicle {
  type: string | undefined;
  constructor(brand: string) {
    // if parent's constructur has some initialized data then you need to pass it here inside super
    // otherwise it gives error
    super(brand);
  }

  setType(type: string) {
    this.type = type;
  }

  getBrand() {
    return this.brand;
  }

  getType() {
    return this.type;
  }

  getDetails() {
    // you will need to use super.method name in case both child and parent class has the method with same name
    return `${this.getBrand()} + ${super.getBrand()}`;
  }
}

let hondaBike = new Bike("Yamaha");
//hondaBike.setData(2, "Honda");
console.log("honda bike", hondaBike.getBrand());
hondaBike.setType("Two Wheeler");
console.log("honda type", hondaBike.getType());
