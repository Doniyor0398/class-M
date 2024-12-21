class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  area() {
    return `Площадь: ${this.width * this.height}`;
  }

  perimetr() {
    return `Периметр: ${2 * (this.width + this.height)}`;
  }
}

module.exports = Rectangle;
