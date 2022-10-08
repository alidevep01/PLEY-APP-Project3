// Dotenv
require("dotenv").config();
// Express Installation
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const routes = require("./routes");

// Mongoose Installation
require("./config/db.connection");

// Cors
const cors = require("cors");
const whitelist = ["http://localhost:3000", "http://localhost:3001", `${process.env.FRONTEND_URL}`];

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin) {
      //for bypassing postman req with  no origin
      return callback(null, true);
    }
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};
app.use(cors(corsOptions));

// Middleware
// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*');
//     next();
//   });
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes

app.use("/pley", routes.pley);

// Port
app.listen(port, () => {
  console.log("Welcome to Pley!", port);
});
