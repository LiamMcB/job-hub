const passport = require('passport');
const LinkedInStrategy = require('passport-linkedin-oauth2');

passport.use(
  new LinkedInStrategy(
    {
      clientID: '86ry0tv8igratg',
      clientSecret: 'dChPKBkuM6sErLXE',
      callbackURL: 'http://127.0.0.1:3000/auth/linkedin/callback',
      scope: ['r_emailaddress', 'r_liteprofile'],
    },
    function (accessToken, refreshToken, profile, done) {
      // asynchronous verification, for effect...
      process.nextTick(function () {
        // To keep the example simple, the user's LinkedIn profile is returned to
        // represent the logged-in user. In a typical application, you would want
        // to associate the LinkedIn account with a user record in your database,
        // and return that user instead.
        return done(null, profile);
      });
    }
  )
);
