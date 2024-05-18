function getShippingMessage(country, price, deliveryFee) {
  const totalCost = price + deliveryFee;
  return "Shipping to " + country + " will cost " + totalCost + " credits";
}

console.log(getShippingMessage("Australia", 120, 50)); // Output: Shipping to Australia will cost 170 credits
console.log(getShippingMessage("Germany", 80, 20)); // Output: Shipping to Germany will cost 100 credits
console.log(getShippingMessage("Sweden", 100, 20)); // Output: Shipping to Sweden will cost 120 credits
