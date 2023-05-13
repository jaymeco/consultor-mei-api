import { License } from '../../models/License';
import { CreateLicenseDto } from '../dtos/CreateLicense';

export interface LicenseService {
  create(data: CreateLicenseDto): Promise<License>;
}
