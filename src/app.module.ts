import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from 'src/prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { AssetsModule } from './assets/assets.module';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: ['.env.development'] }),
    PrismaModule,
    UsersModule,
    ProductsModule,
    AssetsModule,
  ],
})
export class AppModule {}
