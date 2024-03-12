import { Injectable } from '@nestjs/common';
import { CreatePriceChangeDto } from '../dto/create-price-change.dto';
import { UpdatePriceChangeDto } from '../dto/update-price-change.dto';

@Injectable()
export class PriceChangeService {
  create(createPriceChangeDto: CreatePriceChangeDto) {
    return 'This action adds a new priceChange';
  }

  findAll() {
    return `This action returns all priceChange`;
  }

  findOne(id: number) {
    return `This action returns a #${id} priceChange`;
  }

  update(id: number, updatePriceChangeDto: UpdatePriceChangeDto) {
    return `This action updates a #${id} priceChange`;
  }

  remove(id: number) {
    return `This action removes a #${id} priceChange`;
  }
}
