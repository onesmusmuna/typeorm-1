import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Transaction } from './transaction';

@Entity('client')
export class Client extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column({ unique: true })
  email: string;

  @Column({ default: 0 })
  balance: number;

  @OneToMany(() => Transaction, (transaction) => transaction.client, {
    cascade: true,
  })
  transaction: Transaction[];

  @Column({ name: 'card_number', unique: true, length: 10 })
  cardNumber: string;

  @Column({ name: 'is_active', default: true })
  isActive: boolean;

  @Column({ name: 'additional_info', type: 'simple-json', nullable: true })
  additionalInfo: { age: number; weight: string };

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
