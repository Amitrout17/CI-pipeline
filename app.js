const express = require("express");
const app = express();

//routes
const userRoute = require("./routes/userRoute");

app.use((req, res, next) => {
  console.log("common middleware");
  next();
});

app.use(express.json());

app.use("/api/v1", userRoute);

module.exports = app;
