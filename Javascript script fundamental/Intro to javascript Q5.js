// Function to calculate simple interest
function calculateSimpleInterest(principal, rate, time) {
  // Formula for simple interest
  let simpleInterest = (principal * rate * time) / 100;
  return simpleInterest;
}

// Example values
let principalAmount = 1000;
let interestRate = 5;
let timePeriod = 2;

// Calculate and display the simple interest
let result = calculateSimpleInterest(principalAmount, interestRate, timePeriod);
console.log("Simple Interest:", result);
