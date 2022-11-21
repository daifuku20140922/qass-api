import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { AssetsModule } from './assets/assets.module';
import { CategoriesModule } from './categories/categories.module';
import { RentalHistoriesModule } from './rental-histories/rental-histories.module';

@Module({
  imports: [PrismaModule, UsersModule, AssetsModule, CategoriesModule, RentalHistoriesModule],
})
export class AppModule {}
