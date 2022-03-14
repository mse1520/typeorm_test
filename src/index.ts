import 'reflect-metadata';
import { createConnection } from 'typeorm';
import { User } from './database/entity/User';

(async () => {
  try {
    const em = (await createConnection()).manager;

    const user1 = new User('김용현');
    const user2 = new User('황정하');
    const user3 = new User('김민정');
    await em.save([user1, user2, user3]);

    const pickUser = await em.find(User, { where: { id: user2.id } });
    console.log(pickUser);
    const users = await em.find(User);
    console.log(users);

    em.remove(users);

  } catch (error) {
    console.error(error);
  }
})();