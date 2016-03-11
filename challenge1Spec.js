
describe("Shape constructor", function() {
  var rectangle;

  // rectangle is a constructor function
  beforeEach(function() {
    rectangle = new Rectangle("blue", 5, 3);
  });

  it("should set the color and height of the rectangle", function() {
    expect(rectangle.color).toEqual("blue");
    expect(rectangle.height).toEqual(5);
    expect(rectangle.width).toEqual(3);
  });

  it("should have a function getArea on its prototype that returns the area of the rectangle", function() {
    expect(rectangle.getArea()).toEqual(15);
  });

})

describe("Looping to find Object properties", function() {

  var shape1, shape2, shape3;

  beforeEach(function() {
    shape1 = {color: 'green'};
    shape2 = {color: 'yellow', height: 8, width: 5};
    shape3 = new Rectangle("blue", 5, 3);

  });

  it("should print out the object's only key", function() {
    expect(findObjProperties(shape1)).toEqual("color");
  });

  it("should print out the object's keys, comma delimited", function() {
    expect(findObjProperties(shape2)).toEqual("color, height, width");
  });

  it("should print keys belonging to the object instance, not on the prototype", function() {
    expect(findObjProperties(shape3)).toEqual("color, height, width");
  });

});

describe('make a right Triangle', function() {
  it('returns an empty string when the rows input is 0', function() {
    expect(rightTriangle(0)).toEqual("");
  });
  it('returns a string representation of a right triangle', function() {
    expect(rightTriangle(5)).toEqual( "*****\n****\n***\n**\n*" );
  });

})


