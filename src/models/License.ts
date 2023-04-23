import { DataTypes } from 'sequelize';
import {
  Model,
  Table,
  Column,
  PrimaryKey,
  AutoIncrement,
  ForeignKey,
  BelongsTo,
  CreatedAt,
  UpdatedAt,
  DeletedAt,
} from 'sequelize-typescript';
import { LicenseType } from './LicenseType';

@Table({
  tableName: 'license',
  name: {
    plural: 'Licenses',
    singular: 'License',
  },
})
export class License extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column(DataTypes.INTEGER)
    id!: number;

  @ForeignKey(() => LicenseType)
    license_id!: number;

  @BelongsTo(() => LicenseType)
    license_type!: LicenseType;

  @CreatedAt
    created_at!: Date;

  @UpdatedAt
    updated_at!: Date;

  @DeletedAt
    deleted_at!: Date;
}
