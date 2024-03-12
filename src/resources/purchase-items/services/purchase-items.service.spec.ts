import { Test, TestingModule } from '@nestjs/testing';
import { PurchaseItemsService } from './purchase-items.service';

describe('PurchaseItemService', () => {
  let service: PurchaseItemsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PurchaseItemsService],
    }).compile();

    service = module.get<PurchaseItemsService>(PurchaseItemsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
