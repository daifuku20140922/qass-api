import { Test, TestingModule } from '@nestjs/testing';
import { RentalHistoriesService } from './rental-histories.service';

describe('RentalHistoriesService', () => {
  let service: RentalHistoriesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RentalHistoriesService],
    }).compile();

    service = module.get<RentalHistoriesService>(RentalHistoriesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
