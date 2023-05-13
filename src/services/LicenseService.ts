import { LicenseService as Contract } from '../interfaces/contracts/LicenseService';
import { CreateLicenseDto } from '../interfaces/dtos/CreateLicense';
import { models } from '../models';
import { License } from '../models/License';

export class LicenseService implements Contract {
  public async create({ license_type }: CreateLicenseDto): Promise<License> {
    const license = await models.License.create({
      license_type_id: license_type.id,
    });
    
    return license;
  }
}
