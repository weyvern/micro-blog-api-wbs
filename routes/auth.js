import express from 'express';
import verifyToken from '../middlewares/verifyToken.js';
import validateJOI from '../middlewares/validateJOI.js';
import { signUpBody, signInBody } from '../joi/schemas.js';
import { signUp, signIn, getUserInfo, approvedSession } from '../controllers/auth.js';

const authRouter = express.Router();

authRouter.post('/signup', validateJOI(signUpBody), signUp);
authRouter.post('/signin', validateJOI(signInBody), signIn);
authRouter.get('/me', verifyToken, getUserInfo);
authRouter.get('/verify-session', verifyToken, approvedSession);

export default authRouter;
