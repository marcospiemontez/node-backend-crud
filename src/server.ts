import 'reflect-metadata';
import loggerMiddleware from './infra/middleware/logger.middleware';
import express from 'express';
import { routes } from './routes';
import { MySqlConfiguration } from "./infra/database/MySqlConfiguration";
import dotenv from 'dotenv';

dotenv.config();
const app = express();

const dbConfig = new MySqlConfiguration();
dbConfig.createConnection();

app.use(express.json());
app.use(routes);
app.use(loggerMiddleware);

const port = process.env.SERVER_PORT as String;

app.listen(Number(port), () => console.log(`Server is running in port ${Number(port)}`));
