import { Router } from 'express';
import { Transaction } from '../entities/transaction';
import { Client } from '../entities/client.entity';
import { TransactionTypes } from '../entities/transaction';

const router = Router();

router.post('/clients/:clientId/transcations', async (req, res) => {
  const { clientId } = req.params;

  const { type, amount } = req.body;

  const client = await Client.findOne(parseInt(clientId));

  if (!client) {
    return res.status(404).json({ msg: 'client not found' });
  }

  const transaction = Transaction.create({ type, amount, client });
  await transaction.save();

  if (type === TransactionTypes.DEPOSIT) {
    client.balance = client.balance + transaction.amount;
  } else if (type === TransactionTypes.WITHDRAW) {
    client.balance -= amount;
  }

  await client.save();

  res.json(client);
});

export { router as transactionRoutes };
