import { InjectRepository } from '@nestjs/typeorm';
import { PriceChange } from '../entities/price-change.entity';
import { Repository } from 'typeorm';

export class PriceChangeRepository {
  constructor(
    @InjectRepository(PriceChange)
    private readonly priceChangeRepo: Repository<PriceChange>,
  ) {}
}
