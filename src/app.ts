import express from 'express';
import { clientRoutes } from './routes/client.route';
import { bankerRoutes } from './routes/banker.route';
import { transactionRoutes } from './routes/transaction.route';

const port = process.env.PORT;

export function app() {
  const app = express();
  app.use(express.json());

  app.use(clientRoutes);
  app.use(bankerRoutes);
  app.use(transactionRoutes);

  app.listen(port, () => console.log(`-p ${port} UP`));
}
