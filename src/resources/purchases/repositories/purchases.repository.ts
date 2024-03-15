import { InjectRepository } from '@nestjs/typeorm';
import { Purchase } from '../entities/purchase.entity';
import { Repository } from 'typeorm';
import { CreatePurchaseDto } from '../dto/create-purchase.dto';
import { UpdatePurchaseDto } from '../dto/update-purchase.dto';

export class PurchasesRepository {
  constructor(
    @InjectRepository(Purchase)
    private readonly purchaseRepo: Repository<Purchase>,
  ) {}

  async create(dto: CreatePurchaseDto): Promise<Purchase> {
    const purchase = this.purchaseRepo.create(dto);
    await this.purchaseRepo.save(purchase);
    return purchase;
  }

  async get(): Promise<Purchase[]> {
    return this.purchaseRepo.find();
  }

  async getOne(id: string): Promise<Purchase> {
    return this.purchaseRepo.findOne({ where: { purchaseId: id } });
  }

  async update(id: string, dto: UpdatePurchaseDto): Promise<void> {
    await this.purchaseRepo.update(id, dto);
  }

  async delete(id: string): Promise<void> {
    await this.purchaseRepo.delete(id);
  }
}
