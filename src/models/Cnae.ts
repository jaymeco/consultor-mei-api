import { DataTypes } from 'sequelize';
import {
  Model,
  Table,
  Column,
  CreatedAt,
  UpdatedAt,
  DeletedAt,
  PrimaryKey,
  AutoIncrement,
  AllowNull,
  BelongsToMany,
} from 'sequelize-typescript';
import { Client } from './Client';
import { ClientCnae } from './ClientCnae';

@Table({
  tableName: 'cnae',
  name: {
    plural: 'Cnaes',
    singular: 'Cnae',
  },
})
export class Cnae extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column(DataTypes.INTEGER)
    id!: number;

  @AllowNull(false)
  @Column(DataTypes.STRING(255))
    number!: string;

  @BelongsToMany(() => Client, () => ClientCnae)
    clients!: Client[];

  @CreatedAt
    created_at!: Date;

  @UpdatedAt
    updated_at!: Date;

  @DeletedAt
    deleted_at!: Date;
}
