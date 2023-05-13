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
import { ConsultingSegment } from './ConsultingSegment';
import { LicenseType } from './LicenseType';

@Table({
  tableName: 'consulting_segment_license_type',
  name: {
    plural: 'Consulting Segments License Types',
    singular: 'Consulting Segment License Type',
  },
})
export class ConsultingSegmentLicenseType extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column(DataTypes.INTEGER)
    id!: number;

  @ForeignKey(() => ConsultingSegment)
    consulting_segment_id!: number;
 
  @ForeignKey(() => LicenseType)
    license_type_id!: number;

  @CreatedAt
    created_at!: Date;

  @UpdatedAt
    updated_at!: Date;

  @DeletedAt
    deleted_at!: Date;
}
