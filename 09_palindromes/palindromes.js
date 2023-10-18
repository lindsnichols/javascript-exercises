const palindromes = function (arg) {
  let stripped = arg.replace(/[^\w]|_/g, "").toLowerCase();
  let reversed = stripped.split("").reverse().join("");
  if (reversed === stripped) {
    return true;
  }
  return false;
};

// Do not edit below this line
module.exports = palindromes;
