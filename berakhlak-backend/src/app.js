import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import compression from 'compression';
import routes from './routes/index.js';
import { errorHandler } from './middlewares/error.js';
import { notFound } from './middlewares/notFound.js';
import cookieParser from 'cookie-parser';
import rateLimit from 'express-rate-limit';

export function createApp() {
  const app = express();

  app.use(helmet());
  app.use(cors({ origin: true, credentials: true }));
  app.use(compression());
  app.use(express.json());
  app.use(cookieParser());
  app.use(morgan('dev'));

  const loginLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 20,
    standardHeaders: true,
    legacyHeaders: false
  });

  app.use('/api/auth/login', loginLimiter)
  app.use('/api', routes);

  app.use(notFound);
  app.use(errorHandler);

  return app;
}
