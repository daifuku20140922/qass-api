import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserEntity } from 'src/users/entities/user.entity';

@Injectable()
export class UsersRepository {
  constructor(private readonly prisma: PrismaService) {}

  create(input: Prisma.UserCreateInput) {
    return this.prisma.user
      .create({ data: input })
      .then((res) => res)
      .catch((e) => {
        console.error(e);
        throw new Error(e.message);
      });
  }

  update(user: Partial<UserEntity>) {
    return this.prisma.user
      .update({ where: { id: user.id }, data: user })
      .then((data) => data)
      .catch((e) => {
        console.error(e);
        throw e;
      });
  }

  delete(input: Prisma.UserWhereUniqueInput) {
    return this.prisma.user
      .delete({ where: input })
      .then(() => 'success')
      .catch((e) => {
        console.error(e);
        throw new Error(e.message);
      });
  }
}
