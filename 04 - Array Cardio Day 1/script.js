'use strict';

// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1

// Some data we can work with

const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
  { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
  { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
  { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
  { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
  { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's

const bornInSixteenthCentury = inventors.filter((inventor) => {
  const { year } = inventor;
  return (year >= 1500 && year < 1600);
});
console.log(bornInSixteenthCentury);

// Array.prototype.map()
// 2. Give us an array of the inventors' first and last names

const inventorFullnames = inventors.map((inventor) => {
  const { first: firstname, last: lastname } = inventor;
  return `${firstname} ${lastname}`;
});
console.log(inventorFullnames);

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest

const inventorsSortedByBirthdate = [...inventors]
  .sort((left, right) => (left.year - right.year));
console.log(inventorsSortedByBirthdate);

// Array.prototype.reduce()
// 4. How many years did all the inventors live?

const getInventorYearsLived = (inventor) => (inventor.passed - inventor.year);

const inventorsLifeDurationSum = inventors.reduce((sum, inventor) => {
  const age = getInventorYearsLived(inventor);
  return sum + age;
}, 0);
console.log(inventorsLifeDurationSum);

// 5. Sort the inventors by years lived

const inventorsSortedByYearsLived = [...inventors]
  .sort((left, right) => (getInventorYearsLived(left) - getInventorYearsLived(right)));
console.log(inventorsSortedByYearsLived);

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

const boulevards = [
  `Boulevard Auguste-Blanqui`,
  `Boulevard Barbès`,
  `Boulevard Beaumarchais`,
  `Boulevard de l'Amiral-Bruix`,
  `Boulevard Mortier`,
  `Boulevard Poniatowski`,
  `Boulevard Soult`,
  `Boulevard des Capucines`,
  `Boulevard de la Chapelle`,
  `Boulevard de Clichy`,
  `Boulevard du Crime`,
  `Boulevard du Général-d'Armée-Jean-Simon`,
  `Boulevard Haussmann`,
  `Boulevard de l'Hôpital`,
  `Boulevard des Italiens`,
  `Boulevard Lefebvre`,
  `Boulevard de la Madeleine`,
  `Boulevard de Magenta`,
  `Boulevard Marguerite-de-Rochechouart`,
  `Boulevard Montmartre`,
  `Boulevard du Montparnasse`,
  `Boulevard Raspail`,
  `Boulevard Richard-Lenoir`,
  `Boulevard Saint-Germain`,
  `Boulevard Saint-Michel`,
  `Boulevard de Sébastopol`,
  `Boulevard de Strasbourg`,
  `Boulevard du Temple`,
  `Boulevard Voltaire`,
  `Boulevard de la Zone`,
];

const filteredBoulevards = boulevards.filter((boulevard) => boulevard.includes('de'));
console.log(filteredBoulevards);

// 7. sort Exercise
// Sort the people alphabetically by first name

const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];

const getPersonNameParts = (personName) => personName.split(/,\s*/);

const peopleSortedByFirstname = [...people].sort((left, right) => {
  const leftFirstname = getPersonNameParts(left)[1];
  const rightFirstname = getPersonNameParts(right)[1];

  if (leftFirstname < rightFirstname) {
    return -1;
  }

  if (leftFirstname > rightFirstname) {
    return 1;
  }

  return 0;
});
console.log(peopleSortedByFirstname);

// 8. Reduce Exercise
// Sum up the instances of each of these
const carTypes = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];

// const carTypesAmount = carTypes.reduce((result, type, i, arr) => {
//   const
// }, 0);

const getCarTypesAmount = (typeList) => {
  const typeSet = new Set(typeList);
  return typeSet.size;
};
console.log(getCarTypesAmount(carTypes));
