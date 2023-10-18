const findTheOldest = function (array) {
  return array.reduce((lastOldest, elem) => {
    let currentYear = new Date().getFullYear();
    let newAge = (elem.yearOfDeath || currentYear) - elem.yearOfBirth;
    let oldAge =
      (lastOldest.yearOfDeath || currentYear) - lastOldest.yearOfBirth;

    return newAge > oldAge ? elem : lastOldest;
  });
};

// Do not edit below this line
module.exports = findTheOldest;
