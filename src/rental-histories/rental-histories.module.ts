import { Module } from '@nestjs/common';
import { RentalHistoriesService } from './rental-histories.service';
import { RentalHistoriesController } from './rental-histories.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [RentalHistoriesController],
  providers: [RentalHistoriesService],
  imports: [PrismaModule],
})
export class RentalHistoriesModule {}
