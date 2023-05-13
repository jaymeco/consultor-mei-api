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
  Unique,
  BelongsTo,
  ForeignKey,
  BelongsToMany,
} from 'sequelize-typescript';
import { ClientCnae } from './ClientCnae';
import { Cnae } from './Cnae';
import { License } from './License';
import { User } from './User';

@Table({
  tableName: 'client',
  name: {
    plural: 'Clients',
    singular: 'Client',
  },
})
export class Client extends Model {
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
    company_name!: string;

  @AllowNull(false)
  @Unique(true)
  @Column(DataTypes.STRING(15))
    company_cnpj!: string;

  @AllowNull(false)
  @Column(DataTypes.STRING(255))
    state!: string;

  @ForeignKey(() => User)
    user_id!: number;

  @BelongsTo(() => User)
    user!: User;

  @ForeignKey(() => License)
    license_id!: number;

  @BelongsTo(() => License)
    license!: License;

  @BelongsToMany(() => Cnae, () => ClientCnae)
    cnaes!: Cnae[];

  @CreatedAt
    created_at!: Date;

  @UpdatedAt
    updated_at!: Date;

  @DeletedAt
    deleted_at!: Date;
}
