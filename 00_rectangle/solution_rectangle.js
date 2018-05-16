function Rectangle(color, height, width) {
  this.color = color;
  this.height = height;
  this.width = width;
}

Rectangle.prototype.getArea = function () {
  return this.width * this.height;
}