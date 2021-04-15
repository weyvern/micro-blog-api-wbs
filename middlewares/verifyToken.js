import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import ErrorResponse from '../utils/ErrorResponse.js';
import asyncHandler from '../middlewares/asyncHandler.js';

const verifyToken = asyncHandler(async (req, res, next) => {
  const { token } = req.headers;
  if (!token) throw new ErrorResponse('Unauthorized', 401);
  const { _id } = jwt.verify(token, process.env.JWT_SECRET);
  const foundUser = await User.findOne({ _id });
  if (!foundUser) throw new ErrorResponse('User does not exist', 404);
  req.user = foundUser;
  next();
});

export default verifyToken;
