const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const path = require("path");

const errorMiddleware = require("./middleware/error");

// Config
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({ path: "backend/config/config.env" });
}

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());

// Route Imports
const pentesting = require("./routes/pentestingRoute");
const user = require("./routes/userRoute");
const course = require("./routes/courseRoute");
const service = require("./routes/serviceRoute");
const task = require("./routes/taskRoute");

app.use("/api/v1", pentesting);
app.use("/api/v1", user);
app.use("/api/v1", course);
app.use("/api/v1", service);
app.use("/api/v1", task);

// app.use(express.static(path.join(__dirname, "../frontend/build")));

// app.get("*", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "../frontend/build/index.html"));
// });

// Middleware for Errors
app.use(errorMiddleware);

module.exports = app;
