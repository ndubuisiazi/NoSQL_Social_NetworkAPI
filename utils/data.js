const names = [
  "Abebi",
  "Abeni",
  "Abosede",
  "Adaeze",
  "Adaego",
  "Adaku",
  "Adamma",
  "Adanna",
  "Akachi",
  "Alaba",
  "Alheri",
  "Alika",
  "Amara",
  "Ayo",
  "Ayodele",
  "Ayotunde",
  "Chi",
  "Chiagozie",
  "Chiamaka",
  "Chidi",
  "Chidinma",
  "Chika",
  "Chimamanda",
  "Chinara",
  "Chioma",
  "Dada",
  "Ebele",
  "Efe",
  "Ekundayo",
  "Funanya",
  "Hadiza",
  "Ife",
  "Ifeoma",
  "Ifiok",
  "Ige",
  "Ime",
  "Kayin",
  "Kehinde",
  "Lolade",
  "Maryamu",
  "Mojisola",
  "Monifa",
  "Ndidi",
  "Ngozi",
  "Nkiruka",
  "Nneka",
  "Nnenna",
  "Nnenne",
  "Nwanneka",
  "Oghenekevwe",
  "Olubunmi",
  "Omolara",
];

// Get a random item given an array
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Gets a random full name
const getRandomName = () =>
  `${getRandomArrItem(names)} ${getRandomArrItem(names)}`;

  


// Export the functions for use in seed.js
module.exports = { getRandomName };
