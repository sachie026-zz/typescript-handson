"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Vehicle = /** @class */ (function () {
    function Vehicle(brand) {
        this.brand = brand;
    }
    Vehicle.prototype.setData = function (tyresData, brand) {
        this.tyres = tyresData;
        this.brand = brand;
    };
    Vehicle.prototype.getTyres = function () {
        return this.tyres;
    };
    Vehicle.prototype.getBrand = function () {
        return this.brand;
    };
    return Vehicle;
}());
var vehicleInstance1 = new Vehicle("Honda");
// vehicleInstance1.setData(4, "Honda");
var Bike = /** @class */ (function (_super) {
    __extends(Bike, _super);
    function Bike(brand) {
        // if parent's constructur has some initialized data then you need to pass it here inside super
        // otherwise it gives error
        return _super.call(this, brand) || this;
    }
    Bike.prototype.setType = function (type) {
        this.type = type;
    };
    Bike.prototype.getType = function () {
        return this.type;
    };
    return Bike;
}(Vehicle));
var hondaBike = new Bike('Yamaha');
//hondaBike.setData(2, "Honda");
console.log("honda bike", hondaBike.getBrand());
hondaBike.setType("Two Wheeler");
console.log("honda type", hondaBike.getType());
