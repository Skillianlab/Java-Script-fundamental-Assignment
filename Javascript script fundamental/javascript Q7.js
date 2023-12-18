// Function to calculate the area of a circle
function calculateCircleArea(radius) {
  // Use the formula A = π * r^2
  var area = Math.PI * Math.pow(radius, 2);
  return area;
}

// Example usage with radius value of 10
var radius = 10;

var circleArea = calculateCircleArea(radius);
console.log(
  "Area of the circle with radius",
  radius,
  "is:",
  circleArea.toFixed(2)
);
