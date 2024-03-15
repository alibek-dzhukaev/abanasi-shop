import { InjectRepository } from '@nestjs/typeorm';
import { PriceChange } from '../entities/price-change.entity';
import { Repository } from 'typeorm';
import { UpdatePriceChangeDto } from '../dto/update-price-change.dto';
import { CreatePriceChangeDto } from '../dto/create-price-change.dto';

export class PriceChangeRepository {
  constructor(
    @InjectRepository(PriceChange)
    private readonly priceChangeRepo: Repository<PriceChange>,
  ) {}

  async create(dto: CreatePriceChangeDto): Promise<PriceChange> {
    const priceChange = this.priceChangeRepo.create(dto);
    await this.priceChangeRepo.save(priceChange);
    return priceChange;
  }

  async get(): Promise<PriceChange[]> {
    return this.priceChangeRepo.find();
  }

  async getOne(id: string): Promise<PriceChange> {
    return this.priceChangeRepo.findOne({ where: { priceChangeId: id } });
  }

  async update(id: string, dto: UpdatePriceChangeDto): Promise<void> {
    await this.priceChangeRepo.update(id, dto);
  }

  async delete(id: string): Promise<void> {
    await this.priceChangeRepo.delete(id);
  }
}
