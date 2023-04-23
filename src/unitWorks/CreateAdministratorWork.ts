import { AdministratorService } from '../interfaces/contracts/AdministratorService';
import { AuthService } from '../interfaces/contracts/AuthService';
import { CreateUserDto } from '../interfaces/dtos/CreateUser';
import { sequelize } from '../models';

export class CreateAdministratorWork {
  constructor(
    private administratorService: AdministratorService,
    private authService: AuthService,
  ) {
    this.buildUnitWork = this.buildUnitWork.bind(this);
  }

  public async buildUnitWork(
    user: CreateUserDto,
    admin: { name: string, email: string },
  ) {
    const transaction = await sequelize.transaction();

    try {
      const createdUser = await this.authService.createUser(user);

      const createdAdmin = await this.administratorService.create({
        ...admin,
        user_id: createdUser.id,
      });

      await transaction.commit();

      return { createdUser, createdAdmin };
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  }
}
