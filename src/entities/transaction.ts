import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
} from 'typeorm';
import { Client } from './client.entity';

export enum TransactionTypes {
  DEPOSIT = 'deposit',
  WITHDRAW = 'withdraw',
}

@Entity('transaction')
export class Transaction extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'enum', enum: TransactionTypes })
  type: string;

  @Column()
  amount: number;

  @ManyToOne(() => Client, (client) => client.transaction)
  client: Client;
}
