const express = require('express');
const app = express();
const port = 8000;

const mongoose = require('mongoose');

mongoose
  .connect(
    'mongodb+srv://Takkyou:dksk21121234@firstfullstackapp.fi06s.mongodb.net/?retryWrites=true&w=majority',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));

app.get('/', (req, res) => {
  res.send('hello');
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
