import { DataTypes } from 'sequelize';
import {
  Model,
  Table,
  Column,
  AllowNull,
  PrimaryKey,
  AutoIncrement,
} from 'sequelize-typescript';

@Table({
  tableName: 'user_type',
  name: {
    plural: 'UserTypes',
    singular: 'UserType',
  },
})
export class UserType extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column(DataTypes.INTEGER)
    id!: number;

  @AllowNull(false)
  @Column(DataTypes.STRING(255))
    description!: string;
}
