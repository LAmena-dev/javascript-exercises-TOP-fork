const palindromes = function (string) {
  const alphanumeric = "abcdefghijklmnopqrstuvwxyz0123456789";

  const cleanedString = string
    .toLowerCase()
    .split("")
    .filter((character) => alphanumeric.includes(character))
    .join("");

  const reversed = cleanedString.split("").reverse().join("");

  return cleanedString === reversed;
};

// Do not edit below this line
module.exports = palindromes;
