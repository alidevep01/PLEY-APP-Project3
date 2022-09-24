const mongoose = require("mongoose");
const db = mongoose.connection;

mongoose.connect(process.env.mongoURI, () => {
  console.log("mongoose connected!!");
});

db.on("error", (err) => {
  console.log(err.message + "is mongod not running?");
});
db.on("connected", () => {
  console.log("Blade bag is connected to: ", process.env.mongoURI);
});
db.on("disconnected", () => {
  console.log("mongo disconnected");
});
