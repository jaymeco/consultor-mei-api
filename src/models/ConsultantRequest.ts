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
  AllowNull,
} from 'sequelize-typescript';
import { Consultant } from './Consultant';
import { Status } from './Status';

@Table({
  tableName: 'consultant_request',
  name: {
    plural: 'ConsultantRequest',
    singular: 'ConsultantRequests',
  },
})
export class ConsultantRequest extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column(DataTypes.INTEGER)
    id!: number;

  @ForeignKey(() => Status)
    status_id!: number;

  @ForeignKey(() => Consultant)
    consultant_id!: number;

  @BelongsTo(() => Status)
    status!: Status;

  @BelongsTo(() => Consultant)
    consultant!: Consultant;

  @AllowNull(false)
  @Column(DataTypes.DATE)
    date!: Date;

  @CreatedAt
    created_at!: Date;

  @UpdatedAt
    updated_at!: Date;

  @DeletedAt
    deleted_at!: Date;
}
