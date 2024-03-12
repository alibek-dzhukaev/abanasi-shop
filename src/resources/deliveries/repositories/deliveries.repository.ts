import { InjectRepository } from '@nestjs/typeorm';
import { Delivery } from '../entities/delivery.entity';
import { Repository } from 'typeorm';

export class DeliveriesRepository {
  constructor(
    @InjectRepository(Delivery)
    private readonly deliveryRepo: Repository<Delivery>,
  ) {}
}
