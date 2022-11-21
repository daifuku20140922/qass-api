import { Test, TestingModule } from '@nestjs/testing';
import { RentalHistoriesController } from './rental-histories.controller';
import { RentalHistoriesService } from './rental-histories.service';

describe('RentalHistoriesController', () => {
  let controller: RentalHistoriesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RentalHistoriesController],
      providers: [RentalHistoriesService],
    }).compile();

    controller = module.get<RentalHistoriesController>(RentalHistoriesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
