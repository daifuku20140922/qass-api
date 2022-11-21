import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { RentalHistoriesService } from './rental-histories.service';
import { CreateRentalHistoryDto } from './dto/create-rental-history.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('rental-histories')
@ApiTags('rental-histories')
export class RentalHistoriesController {
  constructor(
    private readonly rentalHistoriesService: RentalHistoriesService,
  ) {}

  @Post()
  create(@Body() createRentalHistoryDto: CreateRentalHistoryDto) {
    return this.rentalHistoriesService.create(createRentalHistoryDto);
  }

  @Get()
  findAll() {
    return this.rentalHistoriesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.rentalHistoriesService.findOne(+id);
  }
}
