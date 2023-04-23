import { DataTypes } from 'sequelize';
import {
  Model,
  Table,
  Column,
  AllowNull,
  PrimaryKey,
  AutoIncrement,
  DeletedAt,
  UpdatedAt,
  CreatedAt,
} from 'sequelize-typescript';

@Table({
  tableName: 'license_type',
  name: {
    plural: 'LicenseTypes',
    singular: 'LicenseType',
  },
})
export class LicenseType extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column(DataTypes.INTEGER)
    id!: number;

  @AllowNull(false)
  @Column(DataTypes.STRING(255))
    name!: string;

  @AllowNull(false)
  @Column(DataTypes.STRING(255))
    description!: string;

  @AllowNull(false)
  @Column(DataTypes.FLOAT)
    value!: number;

  @AllowNull(false)
  @Column(DataTypes.FLOAT)
    donate_value!: number;

  @AllowNull(false)
  @Column(DataTypes.STRING(255))
    period!: string;

  @AllowNull(false)
  @Column(DataTypes.STRING(255))
    pagseguro_url!: string;

  @AllowNull(false)
  @Column(DataTypes.DATE)
    promo_date!: Date;

  @AllowNull(false)
  @Column(DataTypes.FLOAT)
    promo_value!: number;

  @CreatedAt
    created_at!: Date;
  
  @UpdatedAt
    updated_at!: Date;

  @DeletedAt
    deleted_at!: Date;
}
