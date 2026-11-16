// Our original function
function greet(name) {
  return `Hello, ${name}!`;
}

// A decorator function that adds logging
function withLogging(fn) {
  // This is the wrapper function that "decorates" the original
  return function (...args) {
    // Log before calling the function
    console.log(`Calling function with args: ${args}`);

    // Call the original function
    const result = fn(...args);

    // Log after calling the function
    console.log(`Function returned: ${result}`);
    console.log(new Date(Date.now).toLocaleString());
    // Return the original result
    return result;
  };
}
// Apply the decorator
const greetWithLogging = withLogging(greet);

// Use the decorated function
greetWithLogging("John");

// Logs: Calling function with args: John
// Logs: Function returned: Hello, John!
// Returns: "Hello, John!"
