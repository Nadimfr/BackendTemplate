const express = require('express');
const app = express();
const userRoute = require('../server/routes/userRoute');
const productRoute = require('../server/routes/productRoute');
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI).then(
    () => {
        
        console.log("connected to mongo");
        console.log(mongoose.modelNames());
    },
    (err) => {
        console.log(err);
    }
);

app.use(express.json());
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);

app.listen(8080, () => {
    console.log("Running");
});
