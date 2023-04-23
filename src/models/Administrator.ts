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
import { User } from './User';

@Table({
  tableName: 'administrator',
  name: {
    plural: 'Administrators',
    singular: 'Administrator',
  },
})
export class Administrator extends Model {
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

  @ForeignKey(() => User)
    user_id!: number;

  @BelongsTo(() => User)
    user!: User;
}
