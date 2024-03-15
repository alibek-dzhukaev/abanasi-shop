import { InjectRepository } from '@nestjs/typeorm';
import { PurchaseItem } from '../entities/purchase-item.entity';
import { Repository } from 'typeorm';
import { CreatePurchaseItemDto } from '../dto/create-purchase-item.dto';
import { UpdatePurchaseItemDto } from '../dto/update-purchase-item.dto';

export class PurchaseItemsRepository {
  constructor(
    @InjectRepository(PurchaseItem)
    private readonly purchaseItemRepo: Repository<PurchaseItem>,
  ) {}

  async create(dto: CreatePurchaseItemDto): Promise<PurchaseItem> {
    const purchaseItem = this.purchaseItemRepo.create(dto);
    await this.purchaseItemRepo.save(purchaseItem);
    return purchaseItem;
  }

  async get() {
    return this.purchaseItemRepo.find();
  }

  async getOne(id: string) {
    return this.purchaseItemRepo.findOne({ where: { purchaseItemId: id } });
  }

  async update(id: string, dto: UpdatePurchaseItemDto) {
    await this.purchaseItemRepo.update(id, dto);
  }

  async delete(id: string) {
    await this.purchaseItemRepo.delete(id);
  }
}
