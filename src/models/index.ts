import { Sequelize, SequelizeOptions } from 'sequelize-typescript';

import { User } from './User';
import { License } from './License';
import { UserType } from './UserType';
import { LicenseType } from './LicenseType';
import { Administrator } from './Administrator';
import path from 'path';

const configsPath = path.resolve(path.dirname(path.dirname(`${__filename}`)), '../configs');

const databaseConfig = require(path.resolve(configsPath, 'database.js'));

export const models = {
  User,
  License,
  UserType,
  LicenseType,
  Administrator,
};

export const sequelize = new Sequelize(
  databaseConfig.database,
  databaseConfig.username,
  databaseConfig.password,
  {
    host: databaseConfig.host,
    dialect: databaseConfig.dialect,
    port: databaseConfig.port,
    models: [...Object.values(models)],
    logging: false,
    define: {
      timestamps: true,
      paranoid: true,
      freezeTableName: true,
      underscored: true,
    },
  } as SequelizeOptions,
);

export const closeSequelize = () => sequelize.close();
