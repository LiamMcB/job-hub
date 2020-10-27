const express = require('express');

const app = express();
const passport = require('passport');
const LinkedInStrategy = require('passport-linkedin-oauth2').Strategy;
const routes = require('./routes.js');

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function (user, cb) {
  cb(null, user);
});

passport.deserializeUser(function (obj, cb) {
  cb(null, obj);
});

passport.use(
  new LinkedInStrategy(
    {
      clientID: '86ry0tv8igratg',
      clientSecret: 'dChPKBkuM6sErLXE',
      callbackURL: 'http://localhost:3000/auth/linkedin/callback',
      scope: ['r_emailaddress', 'r_liteprofile'],
    },
    function (token, tokenSecret, profile, done) {
      console.log(profile);
      return done(null, profile);
    }
  )
);

app.use('/', routes);

app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
});
