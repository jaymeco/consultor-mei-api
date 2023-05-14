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
} from 'sequelize-typescript';
import { ConsultingSegment } from './ConsultingSegment';
import { User } from './User';

@Table({
  tableName: 'consultant',
  name: {
    plural: 'Consultants',
    singular: 'Consultant',
  },
})
export class Consultant extends Model {
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
    city!: string;

  @AllowNull(false)
  @Column(DataTypes.STRING(255))
    curriculum_path!: string;

  @AllowNull(false)
  @Unique(true)
  @Column(DataTypes.STRING(12))
    cpf!: string;

  @AllowNull(false)
  @Column(DataTypes.STRING(255))
    state!: string;

  @ForeignKey(() => User)
    user_id!: number;

  @ForeignKey(() => ConsultingSegment)
    consulting_segment_id!: number;

  @BelongsTo(() => User)
    user!: User;

  @BelongsTo(() => ConsultingSegment)
    consulting_segment!: ConsultingSegment;

  @CreatedAt
    created_at!: Date;

  @UpdatedAt
    updated_at!: Date;

  @DeletedAt
    deleted_at!: Date;
}
