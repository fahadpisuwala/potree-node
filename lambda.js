const serverless = require("serverless-http");
const app = require("./app");
const connectDB = require("./config/db");

let isConnected = false;

module.exports.handler = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false;

  if (!isConnected) {
    await connectDB();
    isConnected = true;
  }

  return serverless(app)(event, context);
};
