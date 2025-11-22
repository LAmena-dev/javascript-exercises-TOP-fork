const fibonacci = function (fib) {
  let prev = 0;
  let current = 1;

  if (typeof fib !== "number") {
    fib = parseInt(fib);
  }

  if (fib < 0) return "OOPS";
  if (fib == 0) return 0;

  for (let i = 2; i <= fib; i++) {
    let sum = prev + current;
    prev = current;
    current = sum;
  }
  return current;
};

// Do not edit below this line
module.exports = fibonacci;
