import { Module } from '@nestjs/common';
import { AssetsService } from './assets.service';
import { AssetsController } from './assets.controller';
import { AssetsRepository } from './infra/assets.repository.prisma';
import { PrismaModule } from 'src/prisma/prisma.module';
import { AssetsQueryService } from './infra/assets.query.service.prisma';
import { UsersModule } from 'src/users/users.module';

@Module({
  controllers: [AssetsController],
  providers: [AssetsService, AssetsRepository, AssetsQueryService],
  imports: [PrismaModule, UsersModule],
})
export class AssetsModule {}
