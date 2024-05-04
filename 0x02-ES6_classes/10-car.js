const cloneCarMethod = Symbol('cloneCar');

class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  [cloneCarMethod]() {
    const constructor = Object.getPrototypeOf(this).constructor;
    return new constructor(this._brand, this._motor, this._color);
  }

  cloneCar() {
    return this[cloneCarMethod]();
  }
}

export default Car;
