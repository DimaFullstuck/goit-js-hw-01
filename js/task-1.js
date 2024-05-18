function makeTransaction(quantity, pricePerDroid) {
  const totalCost = quantity * pricePerDroid;
  return "You ordered " + quantity + " droids worth " + totalCost + " credits!";
}

console.log(makeTransaction(5, 300)); // Output: You ordered 5 droids worth 15000 credits!
console.log(makeTransaction(3, 100)); // Output: You ordered 3 droids worth 300 credits!
console.log(makeTransaction(10, 500)); // Output: You ordered 10 droids worth 500 credits!
