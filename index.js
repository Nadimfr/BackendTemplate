const express = require("express");
const app = express();
const userRoute = require("../BackendServer/routes/userRoute");
const productRoute = require("../BackendServer/routes/productRoute");
const planRoute = require("../BackendServer/routes/planRoute");
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URI).then(
  () => {
    console.log("connected to mongo");
    console.log(mongoose.modelNames());
  },
  (err) => {
    console.log(err);
  }
);

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use(express.json());
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/plans", planRoute);

app.listen(8080, () => {
  console.log("Running");
});
