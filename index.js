const express = require('express');
const app = express();
const userRoute = require('../BackendServer/routes/userRoute');
const doctorRoute = require('../BackendServer/routes/doctorRoute');
const journalRoute = require('../BackendServer/routes/journalRoute');
const quizRoute = require('../BackendServer/routes/quizRoute');
const reviewRoute = require('../BackendServer/routes/reviewRoute');
const historyRoute = require('../BackendServer/routes/historyRoute');
const recommendationRoute = require('../BackendServer/routes/recommendationRoute');
const mongoose = require('mongoose');
const cors = require('cors');

mongoose.connect(process.env.MONGO_URI).then(
  () => {
    console.log('connected to mongo');
  },
  (err) => {
    console.log(err);
  }
);

// Enable CORS
app.use(cors());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'OPTIONS, GET, POST, PUT, PATCH, DELETE'
  );
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.use(express.json());
app.use('/api/users', userRoute);
app.use('/api/doctors', doctorRoute);
app.use('/api/journal', journalRoute);
app.use('/api/quiz', quizRoute);
app.use('/api/review', reviewRoute);
app.use('/api/history', historyRoute);
app.use('/api/recommendation', recommendationRoute);

app.listen(8080, () => {
  console.log('Running');
});
