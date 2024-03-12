import { Injectable } from '@nestjs/common';
import { CreatePurchaseItemDto } from '../dto/create-purchase-item.dto';
import { UpdatePurchaseItemDto } from '../dto/update-purchase-item.dto';

@Injectable()
export class PurchaseItemsService {
  create(createPurchaseItemDto: CreatePurchaseItemDto) {
    return 'This action adds a new purchaseItem';
  }

  findAll() {
    return `This action returns all purchaseItem`;
  }

  findOne(id: number) {
    return `This action returns a #${id} purchaseItem`;
  }

  update(id: number, updatePurchaseItemDto: UpdatePurchaseItemDto) {
    return `This action updates a #${id} purchaseItem`;
  }

  remove(id: number) {
    return `This action removes a #${id} purchaseItem`;
  }
}
