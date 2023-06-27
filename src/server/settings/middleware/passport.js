const passport = require("passport");
const User = require("../../../database/model/user.model");
const GOOGLE_CLIENT_ID = "357966480515-hbvmh7psb1ofcmjlmnf9rtnohlmo33ga.apps.googleusercontent.com"
const GOOGLE_CLIENT_SECRET = "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"
const GoogleStrategy = require('passport-google-oauth20').Strategy;


passport.use(
    new GoogleStrategy(
      {
        clientID: GOOGLE_CLIENT_ID,
        clientSecret: GOOGLE_CLIENT_SECRET,
        callbackURL: "/auth/google/callback",
      },
      function (accessToken, refreshToken, profile, done) {
        done(null, profile);
        
      }
    )
  );

passport.serializeUser((user, done) =>  {
    done(null, user)
})

passport.deserializeUser((user, done) => {
    done(null, user)
})