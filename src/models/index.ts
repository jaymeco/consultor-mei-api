import path from 'path';
import { Sequelize, SequelizeOptions } from 'sequelize-typescript';

import { Cnae } from './Cnae';
import { User } from './User';
import { Client } from './Client';
import { Status } from './Status';
import { License } from './License';
import { UserType } from './UserType';
import { Consultant } from './Consultant';
import { ClientCnae } from './ClientCnae';
import { LicenseType } from './LicenseType';
import { Administrator } from './Administrator';
import { ConsultantRequest } from './ConsultantRequest';
import { ConsultingSegment } from './ConsultingSegment';
import { ConsultingSegmentLicenseType } from './ConsultingSegmentLicenseType';

const configsPath = path.resolve(path.dirname(path.dirname(`${__filename}`)), '../configs');

const databaseConfig = require(path.resolve(configsPath, 'database.js'));

export const models = {
  Cnae,
  User,
  Client,
  Status,
  License,
  UserType,
  ClientCnae,
  Consultant,
  LicenseType,
  Administrator,
  ConsultantRequest,
  ConsultingSegment,
  ConsultingSegmentLicenseType,
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
