import { Module } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { UsersController } from 'src/users/users.controller';
import { UsersQueryUsecase } from 'src/users/usecases/user.query.usecase';
import { UsersCommandUsecase } from 'src/users/usecases/user.command.usecase';
import { PrismaModule } from 'src/prisma/prisma.module';
import { UsersQueryService } from 'src/users/infra/users.query.service.prisma';
import { UsersRepository } from 'src/users/infra/users.repository.prisma';

@Module({
  controllers: [UsersController],
  providers: [
    UsersService,
    UsersQueryUsecase,
    UsersCommandUsecase,
    UsersQueryService,
    UsersRepository,
  ],
  imports: [PrismaModule],
  exports: [UsersService],
})
export class UsersModule {}
