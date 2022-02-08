import Router from 'express';
import { Client } from '../entities/client.entity';

const router = Router();

router.post('/clients', async (req, res) => {
  const { username, email, cardNumber } = req.body;

  const client = Client.create({ username, email, cardNumber });
  await client.save();

  res.json(client);
});

export { router as clientRoutes };
