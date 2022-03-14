import { Column, Entity } from 'typeorm';
import { Common } from './Common';

@Entity()
export class User extends Common {
  @Column({ nullable: true })
  name?: string;

  constructor(name?: string) {
    super();
    this.name = name;
  }
}