const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose
    .connect("mongodb://0.0.0.0:27017/nexus", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    })
    .then((data) => {
      console.log(`Mongodb connected with server: ${data.connection.host}`);
    });
};

module.exports = connectDatabase;
