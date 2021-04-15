import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import 'dotenv/config.js';
import './db/mongoose.js';
import authRouter from './routes/auth.js';
import errorHandler from './middlewares/errorHandler.js';

const app = express();
const port = process.env.PORT || 5000;

if (process.env.NODE_ENV !== 'production') {
  app.use(morgan('dev'));
}
app.use(cors({ origin: process.env.ORIGIN }));
app.use(express.json());
app.use('/auth', authRouter);
app.use(errorHandler);

app.listen(port, () => console.log(`Server running on port ${port}`));
