import { DataTypes } from 'sequelize';
import {
  Model,
  Table,
  Column,
  AllowNull,
  PrimaryKey,
  AutoIncrement,
  CreatedAt,
  UpdatedAt,
  DeletedAt,
} from 'sequelize-typescript';

@Table({
  tableName: 'status',
  name: {
    plural: 'Status',
    singular: 'Status',
  },
})
export class Status extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column(DataTypes.INTEGER)
    id!: number;

  @AllowNull(false)
  @Column(DataTypes.STRING(255))
    description!: string;

  @CreatedAt
    created_at!: Date;

  @UpdatedAt
    updated_at!: Date;

  @DeletedAt
    deleted_at!: Date;
}
