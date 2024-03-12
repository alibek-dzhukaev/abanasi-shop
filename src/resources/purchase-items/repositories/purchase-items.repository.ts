import { InjectRepository } from '@nestjs/typeorm';
import { PurchaseItem } from '../entities/purchase-item.entity';
import { Repository } from 'typeorm';

export class PurchaseItemsRepository {
  constructor(
    @InjectRepository(PurchaseItem)
    private readonly purchaseItemRepo: Repository<PurchaseItem>,
  ) {}
}
