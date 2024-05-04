/**
 * Divides two numbers.
 * @param {number} numerator - The numerator.
 * @param {number} denominator - The denominator.
 * @returns {number} The result of the division.
 * @throws {Error} If the denominator is equal to 0.
 */
export default function divideFunction(numerator, denominator) {
  if (denominator === 0) {
    throw new Error('cannot divide by 0');
  }
  return numerator / denominator;
}
