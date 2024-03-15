import { Injectable } from '@nestjs/common';
import { CreatePurchaseDto } from '../dto/create-purchase.dto';
import { UpdatePurchaseDto } from '../dto/update-purchase.dto';
import { PurchasesRepository } from '../repositories/purchases.repository';
import { PurchaseResponse } from '../types';

@Injectable()
export class PurchasesService {
  constructor(private readonly purchasesRepository: PurchasesRepository) {}
  create(createPurchaseDto: CreatePurchaseDto): Promise<PurchaseResponse> {
    return this.purchasesRepository.create(createPurchaseDto);
  }

  findAll(): Promise<PurchaseResponse[]> {
    return this.purchasesRepository.get();
  }

  findOne(id: string): Promise<PurchaseResponse> {
    return this.purchasesRepository.getOne(id);
  }

  update(id: string, updatePurchaseDto: UpdatePurchaseDto): Promise<void> {
    return this.purchasesRepository.update(id, updatePurchaseDto);
  }

  remove(id: string): Promise<void> {
    return this.purchasesRepository.delete(id);
  }
}
