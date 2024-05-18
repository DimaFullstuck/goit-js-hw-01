function getElementWidth(content, padding, border) {
  const contentWidth = parseInt(content);
  const paddingWidth = parseInt(padding);
  const borderWidth = parseFloat(border);
  return contentWidth + paddingWidth + borderWidth;
}

console.log(getElementWidth("50px", "8px", "4px")); // Output: 74
console.log(getElementWidth("60px", "12px", "8.5px")); // Output: 101
console.log(getElementWidth("200px", "px", "px")); // Output: 200
