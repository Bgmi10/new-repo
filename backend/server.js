const app = require("./app");
const cloudinary = require("cloudinary");
const connectDatabase = require("./config/database");
const { attendence } = require("./controllers/userController");





// Handling Uncaught Exception
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to Uncaught Exception`);
  process.exit(1);
});

// Config
require("dotenv").config({ path: "backend/config/config.env" });




// Connecting to database
connectDatabase();

const server = app.listen(process.env.PORT, () => {
  console.log(`Server is working on http://localhost:${process.env.PORT}`);
});

// Unhandled Promise Rejection
process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to Unhandled Promise Rejection`);

  server.close(() => {
    process.exit(1);
  });
});


setInterval(() => {
  let now = new Date();

  // get the current hour (from 0 to 23)
  let hour = now.getHours();
  let minute = now.getMinutes();

  if ((hour + ":" + minute) == "1:8") {
    attendence();
  }
}, 60 * 1000);



console.log(`Connecting to database with URI: ${process.env.DB_URI}`);
