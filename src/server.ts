import 'reflect-metadata';
import loggerMiddleware from './infra/middleware/logger.middleware';
import express from 'express';
import { routes } from './routes';
import { MySqlConfiguration } from "./infra/database/MySqlConfiguration";

const app = express();
const PORT = 3000;

const dbConfig = new MySqlConfiguration();
dbConfig.createConnection();

app.use(express.json());
app.use(routes);
app.use(loggerMiddleware);

const port: number = 3000;

app.listen(port, () => console.log(`Server is running in port ${port}`));
