const { resolve } = require('path');

const config = {
  synchronize: true,
  logging: true,
  entities: [resolve('src', 'database', 'entity', '**', '*.ts')],
  migrations: [resolve('src', 'database', 'migration', '**', '*.ts')],
  subscribers: [resolve('src', 'database', 'subscriber', '**', '*.ts')],
  cli: {
    entitiesDir: resolve('src', 'database', 'entity'),
    migrationsDir: resolve('src', 'database', 'migration'),
    subscribersDir: resolve('src', 'database', 'subscriber')
  }
}

module.exports = [{
  name: 'default',
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '1234',
  database: 'typeorm_test',
  ...config
}];