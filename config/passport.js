import passport from "passport";
import { Strategy as  BearerStrategy} from "passport-http-bearer";
import { verifyToken } from "./JWT.js";

passport.use(new BearerStrategy( 
  { passReqToCallback: true },
  async function(req, token, done) {
    const usuario =  await verifyToken(req, token)
    if (!usuario) return done(null, false);
    return done(null, usuario);
  }
));
export default passport; 