const sumAll = function (start, finish) {
  if (
    typeof start != "number" ||
    typeof finish != "number" ||
    start < 0 ||
    finish < 0
  ) {
    return "ERROR";
  }
  let sum = 0;
  for (let i = Math.min(start, finish); i <= Math.max(start, finish); i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
