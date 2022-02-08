import { createConnection } from 'typeorm';
require('dotenv').config();

import { Client } from './entities/client.entity';
import { Banker } from './entities/banker.entity';
import { Transaction } from './entities/transaction';

export async function dbConnect() {
  try {
    await createConnection({
      type: 'postgres',
      username: `${process.env.DB_USERNAME}`,
      password: `${process.env.DB_PASSWORD}`,
      database: `${process.env.DB}`,
      entities: [Client, Banker, Transaction],
      synchronize: true,
    });

    console.log('DB UP');
  } catch (err) {
    console.log(' DB DOWN\n', err.message);
  }
}
