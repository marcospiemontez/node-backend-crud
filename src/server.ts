import 'reflect-metadata';
import loggerMiddleware from './infra/middleware/logger.middleware';
import express from 'express';
import { routes } from './routes';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(routes);
app.use(loggerMiddleware);

const port: number = 3000;

app.listen(port, () => console.log(`Server is running in port ${port}`));
