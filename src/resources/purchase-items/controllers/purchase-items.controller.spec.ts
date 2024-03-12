import { Test, TestingModule } from '@nestjs/testing';
import { PurchaseItemsController } from './purchase-items.controller';
import { PurchaseItemsService } from '../services/purchase-items.service';

describe('PurchaseItemController', () => {
  let controller: PurchaseItemsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PurchaseItemsController],
      providers: [PurchaseItemsService],
    }).compile();

    controller = module.get<PurchaseItemsController>(PurchaseItemsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
