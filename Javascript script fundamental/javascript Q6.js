// Function to calculate BMI
function calculateBMI(weight, height) {
  // Ensure height is in meters
  height = height / 100;

  // Calculate BMI using the formula
  var bmi = weight / (height * height);

  return bmi;
}

// Example usage
var weight = 70; // in kilograms
var height = 175; // in centimeters

var bmiResult = calculateBMI(weight, height);
console.log("BMI:", bmiResult.toFixed(2));
