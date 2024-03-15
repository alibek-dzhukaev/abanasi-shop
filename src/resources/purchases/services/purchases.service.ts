import { Injectable } from '@nestjs/common';
import { CreatePurchaseDto } from '../dto/create-purchase.dto';
import { UpdatePurchaseDto } from '../dto/update-purchase.dto';
import { PurchasesRepository } from '../repositories/purchases.repository';

@Injectable()
export class PurchasesService {
  constructor(private readonly purchasesRepository: PurchasesRepository) {}
  create(createPurchaseDto: CreatePurchaseDto) {
    return this.purchasesRepository.create(createPurchaseDto);
  }

  findAll() {
    return this.purchasesRepository.get();
  }

  findOne(id: string) {
    return this.purchasesRepository.getOne(id);
  }

  update(id: string, updatePurchaseDto: UpdatePurchaseDto) {
    return this.purchasesRepository.update(id, updatePurchaseDto);
  }

  remove(id: string) {
    return this.purchasesRepository.delete(id);
  }
}
