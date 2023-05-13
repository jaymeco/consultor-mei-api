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
  ForeignKey,
} from 'sequelize-typescript';
import { Client } from './Client';
import { Cnae } from './Cnae';

@Table({
  tableName: 'client_cnae',
  name: {
    plural: 'Client Cnaes',
    singular: 'Client Cnae',
  },
})
export class ClientCnae extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column(DataTypes.INTEGER)
    id!: number;

  @ForeignKey(() => Client)
    client_id!: number;
 
  @ForeignKey(() => Cnae)
    cnae_id!: number;

  @CreatedAt
    created_at!: Date;

  @UpdatedAt
    updated_at!: Date;

  @DeletedAt
    deleted_at!: Date;
}
