import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { ProductsCommandUsecase } from './usecases/products.command.usecase';
import { ProductsRepository } from './infra/products.repository.prisma';
import { ProductsQueryUsecase } from './usecases/products.query.usecase';
import { ProductsQueryService } from './infra/products.query.service.prisma';

@Module({
  controllers: [ProductsController],
  providers: [
    ProductsService,
    ProductsCommandUsecase,
    ProductsQueryUsecase,
    ProductsRepository,
    ProductsQueryService,
  ],
  imports: [PrismaModule],
})
export class ProductsModule {}
