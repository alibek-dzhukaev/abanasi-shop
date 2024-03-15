import { Injectable } from '@nestjs/common';
import { CreatePurchaseItemDto } from '../dto/create-purchase-item.dto';
import { UpdatePurchaseItemDto } from '../dto/update-purchase-item.dto';
import { PurchaseItemsRepository } from '../repositories/purchase-items.repository';
import { PurchaseItem } from '../entities/purchase-item.entity';
import { PurchaseItemResponse } from '../types';

@Injectable()
export class PurchaseItemsService {
  constructor(
    private readonly purchaseItemsRepository: PurchaseItemsRepository,
  ) {}

  create(
    createPurchaseItemDto: CreatePurchaseItemDto,
  ): Promise<PurchaseItemResponse> {
    return this.purchaseItemsRepository.create(createPurchaseItemDto);
  }

  findAll(): Promise<PurchaseItemResponse[]> {
    return this.purchaseItemsRepository.get();
  }

  findOne(id: string): Promise<PurchaseItemResponse> {
    return this.purchaseItemsRepository.getOne(id);
  }

  update(
    id: string,
    updatePurchaseItemDto: UpdatePurchaseItemDto,
  ): Promise<void> {
    return this.purchaseItemsRepository.update(id, updatePurchaseItemDto);
  }

  remove(id: string): Promise<void> {
    return this.purchaseItemsRepository.delete(id);
  }
}
