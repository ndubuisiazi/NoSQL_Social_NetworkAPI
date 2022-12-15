const connection = require('../config/connection');
const { Thought, User } = require('../models');
const { getRandomName } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');

  // Drop existing thoughts
  await Thought.deleteMany({});

  // Drop existing users
  await User.deleteMany({});

  // Create empty array to hold the users
  const users = [];

  for (let i = 0; i < 15; i++) {
    // Get some random assignment objects using a helper function that we imported from ./data

    const fullName = getRandomName();
    const first = fullName.split(' ')[1];
    const last = fullName.split(' ')[0];
    const username = `${first}${Math.floor(Math.random() * (99 - 18 + 1) + 18)}`;
    const email = `${first}.${last}@gmail.com`;
    

    users.push({
      username,
      email,
    
    });
  }
  // Add users to the collection and await the results
  await User.collection.insertMany(users);
  console.log("users")
    console.log(users)

  // Log out the seed data to indicate what should appear in the database
  console.table(users);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});
