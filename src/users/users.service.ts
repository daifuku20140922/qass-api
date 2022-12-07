import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserEntity } from './entities/user.entity';
import { UserStatus } from './entities/user.status';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  isExists(id: number): Promise<boolean> {
    return this.prisma.user
      .findUnique({ where: { id } })
      .then((x) => x !== null);
  }
}
