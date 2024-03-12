import { Test, TestingModule } from '@nestjs/testing';
import { PriceChangeService } from './price-change.service';

describe('PriceChangeService', () => {
  let service: PriceChangeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PriceChangeService],
    }).compile();

    service = module.get<PriceChangeService>(PriceChangeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
