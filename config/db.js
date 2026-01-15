const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  // 0 = disconnected, 1 = connected, 2 = connecting, 3 = disconnecting
  if (mongoose.connection.readyState === 1) {
    return;
  }

  await mongoose.connect(process.env.MONGODB_URI);
  console.log("✅ MongoDB connected");
};

module.exports = connectDB;
