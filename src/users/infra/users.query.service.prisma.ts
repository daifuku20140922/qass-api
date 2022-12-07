import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersQueryService {
  constructor(private readonly prisma: PrismaService) {}

  async user(input: Prisma.UserWhereUniqueInput) {
    if (!input.id && !input.qrImagePath) {
      throw new Error('no unique key found');
    }

    return this.prisma.user.findUnique({
      where: input,
      include: { items: true },
    });
  }

  async users(input: {
    skip?: number;
    take?: number;
    cursor?: Prisma.UserWhereUniqueInput;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput;
  }) {
    const { skip, take, cursor, where, orderBy } = input;

    return this.prisma.user.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
      include: { items: true },
    });
  }
}
