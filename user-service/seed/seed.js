const mongoose = require("mongoose");
const User = require("../models/User");

mongoose.connect("mongodb://mongodb:27017/devopsdb");

const seedUsers = async () => {
  try {
    await User.deleteMany();

    await User.insertMany([
      {
        name: "Alice",
        email: "alice@gmail.com",
      },
      {
        name: "Bob",
        email: "bob@gmail.com",
      },
    ]);

    console.log("✅ Users Seeded Successfully");

    process.exit();
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

seedUsers();