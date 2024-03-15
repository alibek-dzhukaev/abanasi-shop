import { Injectable } from '@nestjs/common';
import { CreatePriceChangeDto } from '../dto/create-price-change.dto';
import { UpdatePriceChangeDto } from '../dto/update-price-change.dto';
import { PriceChangeResponse } from '../types';
import { PriceChangeRepository } from '../repositories/price-change.repository';

@Injectable()
export class PriceChangeService {
  constructor(private readonly priceChangeRepository: PriceChangeRepository) {}
  create(
    createPriceChangeDto: CreatePriceChangeDto,
  ): Promise<PriceChangeResponse> {
    return this.priceChangeRepository.create(createPriceChangeDto);
  }

  findAll(): Promise<PriceChangeResponse[]> {
    return this.priceChangeRepository.get();
  }

  findOne(id: string): Promise<PriceChangeResponse> {
    return this.priceChangeRepository.getOne(id);
  }

  update(
    id: string,
    updatePriceChangeDto: UpdatePriceChangeDto,
  ): Promise<void> {
    return this.priceChangeRepository.update(id, updatePriceChangeDto);
  }

  remove(id: string): Promise<void> {
    return this.priceChangeRepository.delete(id);
  }
}
