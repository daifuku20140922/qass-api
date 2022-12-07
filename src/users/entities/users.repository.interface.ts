import { IRepo } from 'src/common/persistence/repository.interface';
import { UserEntity } from 'src/users/entities/user.entity';

export const IUsersRepositoryToken = Symbol('IUsersRepository');

export interface IUsersRepository extends IRepo<UserEntity> {}
