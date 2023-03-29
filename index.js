require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");
const { connectToDB, GetMongoDB } = require("./MongoDB_Con/connection");

// Express Middleware
const app = express();
app.use(express.json());
app.use(cookieParser());

// Response headers
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS, HEAD"
  );
  next();
});

// Mongodb connection script
connectToDB((err) => {
  if (!err) {
    app.listen(process.env.APP_LISTEN_PORT, () => {
      console.log(`app is listing on port ${process.env.APP_LISTEN_PORT}`);
    });
    // All routes
    app.use(require("./Routes/routes"));
  }
});
