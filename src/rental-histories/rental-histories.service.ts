import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateRentalHistoryDto } from './dto/create-rental-history.dto';

@Injectable()
export class RentalHistoriesService {
  constructor(private readonly prisma: PrismaService) {}
  create(createRentalHistoryDto: CreateRentalHistoryDto) {
    return this.prisma.rentalHistory.create({ data: createRentalHistoryDto });
  }

  findAll() {
    return this.prisma.rentalHistory.findMany();
  }

  findOne(id: number) {
    return this.prisma.rentalHistory.findUnique({ where: { id: id } });
  }
}
