const express = require('express');
const app = express();
const port = 8000;
const cors = require('cors');
require('dotenv').config();

const user = require('./rotues/user');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const mongoose = require('mongoose');

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));

app.use('/api/user', user);

app.get('/', (req, res) => {
  res.send('hello');
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
