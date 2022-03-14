import { CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

export abstract class Common {

  @PrimaryGeneratedColumn()
  readonly id?: number;

  @CreateDateColumn({ name: 'create_at' })
  readonly createAt?: Date;

  @UpdateDateColumn({ name: 'update_at' })
  readonly updateAt?: Date;
}