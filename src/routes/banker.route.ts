import Router from 'express';
import { Banker } from '../entities/banker.entity';

const router = Router();

router.post('/banker', async (req, res) => {
  const { username, email, employeeNumber } = req.body;

  const banker = Banker.create({ username, email, employeeNumber });
  await banker.save();

  res.json(banker);
});

export { router as bankerRoutes };
