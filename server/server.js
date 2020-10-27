const express = require('express');

const app = express();
const passport = require('passport');

const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(passport.initialize());
app.use(passport.session());

app.use('/api', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
});
