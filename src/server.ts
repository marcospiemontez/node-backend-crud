import 'reflect-metadata';
import express from 'express';
import { routes } from './routes';
import loggerMiddleware from './infra/middleware/logger.middleware';

const app = express();
const PORT = 3000;

app.use(loggerMiddleware);
app.use(express.json());
app.use(routes);

const port: number = 3000;

app.listen(port, () => console.log(`Server is running in port ${port}`));
