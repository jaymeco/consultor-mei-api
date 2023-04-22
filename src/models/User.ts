import { DataTypes } from 'sequelize';
import {
  Model,
  Table,
  Column,
  AllowNull,
  PrimaryKey,
  AutoIncrement,
  Unique,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { License } from './License';
import { UserType } from './UserType';

@Table({
  tableName: 'user',
  name: {
    plural: 'Users',
    singular: 'User',
  },
})
export class User extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column(DataTypes.INTEGER)
    id!: number;

  @AllowNull(false)
  @Column(DataTypes.STRING(255))
    name!: string;

  @AllowNull(false)
  @Unique(true)
  @Column(DataTypes.STRING(255))
    email!: string;

  @AllowNull(false)
  @Column(DataTypes.STRING(255))
    password!: string;

  @AllowNull(false)
  @Column(DataTypes.STRING(255))
    avatar_path!: string;

  @ForeignKey(() => License)
    license_id!: number;

  @ForeignKey(() => UserType)
    user_type_id!: number;

  @BelongsTo(() => License)
    license!: License;

  @BelongsTo(() => UserType)
    user_type!: UserType;
}
