import { Injectable } from '@nestjs/common';
import { UserEntity } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { UpdateUserDto } from 'src/users/dto/update-user.dto';

//Must be Dependency Inversion
import { UsersRepository } from 'src/users/infra/users.repository.prisma';
import { UsersQueryService } from '../infra/users.query.service.prisma';

@Injectable()
export class UsersCommandUsecase {
  constructor(
    private readonly service: UsersService,
    private readonly repository: UsersRepository,
    private readonly query: UsersQueryService,
  ) {}
  async create(dto: CreateUserDto) {
    const user: UserEntity = new UserEntity(dto);
    if (await this.service.isExists(dto.id)) {
      throw new Error('Duplicated User ID');
    }

    return this.repository.create(user);
  }

  async update(id: number, dto: UpdateUserDto) {
    const user = await this.query
      .user({ id: id })
      .then((u) => {
        if (u === null) {
          throw new Error('User Not Found');
        }
        return u;
      })
      .catch((e) => {
        console.error(e);
        throw e;
      });

    //TODO: Store Hashed Password.
    const updated = { ...user, ...dto };
    return this.repository.update(updated);
  }

  async delete(id: number) {
    if (!(await this.service.isExists(id))) {
      throw new Error('User Not Found');
    }
    const uniqueKey = { id: id };
    return this.repository.delete(uniqueKey);
  }
}

const exclude = <T, K extends keyof T>(obj: T, keys: K[]) => {
  keys.map((k) => delete obj[k]);
  return obj;
};
