import licenseTypes from '../constants/licenseTypes';
import { AuthService } from '../interfaces/contracts/AuthService';
import { ClientService } from '../interfaces/contracts/ClientService';
import { CnaeService } from '../interfaces/contracts/CnaeService';
import { LicenseService } from '../interfaces/contracts/LicenseService';
import { CreateClientDto } from '../interfaces/dtos/CreateClient';
import { CreateCnaeDto } from '../interfaces/dtos/CreateCnae';
import { CreateUserDto } from '../interfaces/dtos/CreateUser';
import { sequelize } from '../models';

export class CreateClientWork {
  constructor(
    private clientService: ClientService,
    private authService: AuthService,
    private cnaeService: CnaeService,
    private licenseService: LicenseService,
  ) {
    this.buildUnitWork = this.buildUnitWork.bind(this);
  }


  public async buildUnitWork(
    userData: CreateUserDto,
    clientData: Omit<CreateClientDto, 'user' | 'license'>,
    cnaeData: CreateCnaeDto,
  ) {
    const transaction = await sequelize.transaction();

    try {
      const createdUser = await this.authService.createUser(userData);

      const createdLicense = await this.licenseService.create({
        license_type: licenseTypes.GRATUITO,
      });

      const createdClient = await this.clientService.create({
        company_cnpj: clientData.company_cnpj,
        company_name: clientData.company_name,
        name: clientData.name,
        email: clientData.email,
        state: clientData.state,
        user: {
          id: createdUser.id,
        },
        license: {
          id: createdLicense.id,
        },
      });

      const createdCnaes = await this.cnaeService.createMany(cnaeData);

      await this.cnaeService.associateCnaeWithClient(
        createdClient,
        createdCnaes,
      );

      await transaction.commit();

      return {
        createdUser,
        createdCnaes,
        createdClient,
        createdLicense,
      };
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  }
}
