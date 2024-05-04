/**
 * Creates an array named queue and appends the result or error of executing the mathFunction to it.
 * @param {Function} mathFunction - The math function to execute.
 * @returns {Array} An array containing the result or error message and the message "Guardrail was processed".
 */
export default function guardrail(mathFunction) {
  const queue = [];
  try {
    const result = mathFunction();
    queue.push(result);
  } catch (error) {
    queue.push(error.message);
  } finally {
    queue.push('Guardrail was processed');
  }
  return queue;
}
