export function convertDecimalToInteger(number) {
    // Convert the number to a string.
    const numberString = String(number);
  
    // Get the index of the decimal point.
    const decimalIndex = numberString.indexOf(".");
  
    // If there is no decimal point, return the number.
    if (decimalIndex === -1) {
      return number;
    }
  
    // Get the integer part of the number.
    const integerPart = numberString.substring(0, decimalIndex);
  
    // Get the fractional part of the number.
    const fractionalPart = numberString.substring(decimalIndex + 1);
  
    // If the fractional part is greater than or equal to 0.5, round up the number.
    if (Number(fractionalPart) >= 0.5) {
      return Number(integerPart) + 1;
    }
  
    // Otherwise, return the number as is.
    return number;
  }