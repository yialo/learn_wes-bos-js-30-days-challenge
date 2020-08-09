// ## Array Cardio Day 2

const people = [
  { name: 'Wes', year: 1988 },
  { name: 'Kait', year: 1986 },
  { name: 'Irv', year: 1970 },
  { name: 'Lux', year: 2015 },
];

const comments = [
  { text: 'Love this!', id: 523423 },
  { text: 'Super good', id: 823423 },
  { text: 'You are the best', id: 2039842 },
  { text: 'Ramen is my fav food ever', id: 123523 },
  { text: 'Nice Nice Nice!', id: 542328 },
];

// Some and Every Checks
// is at least one person 19 or older?
const THRESHOLD_AGE = 19;

const isAllNineteenOrOlder = people.some(({ year }) => {
  const birthDate = new Date(year + 1) - 1;
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const lastMillisecondOfThisYear = new Date(currentYear + 1) - 1;

  const isBirthdayGone = currentDate.getTime() === lastMillisecondOfThisYear;
  const age = currentYear - year - (isBirthdayGone ? 0 : 1);

  return age >= THRESHOLD_AGE;
});
console.log(isAllNineteenOrOlder);

// is everyone 19 or older?
// Array.prototype.every()

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423

// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423
