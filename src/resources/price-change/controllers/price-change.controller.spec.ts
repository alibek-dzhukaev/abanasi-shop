import { Test, TestingModule } from '@nestjs/testing';
import { PriceChangeController } from './price-change.controller';
import { PriceChangeService } from '../services/price-change.service';

describe('PriceChangeController', () => {
  let controller: PriceChangeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PriceChangeController],
      providers: [PriceChangeService],
    }).compile();

    controller = module.get<PriceChangeController>(PriceChangeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
