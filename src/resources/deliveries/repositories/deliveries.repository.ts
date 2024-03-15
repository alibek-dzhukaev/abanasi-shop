import { InjectRepository } from '@nestjs/typeorm';
import { Delivery } from '../entities/delivery.entity';
import { Repository } from 'typeorm';
import { CreateDeliveryDto } from '../dto/create-delivery.dto';
import { UpdateDeliveryDto } from '../dto/update-delivery.dto';

export class DeliveriesRepository {
  constructor(
    @InjectRepository(Delivery)
    private readonly deliveryRepo: Repository<Delivery>,
  ) {}

  async create(dto: CreateDeliveryDto): Promise<Delivery> {
    const delivery = this.deliveryRepo.create(dto);
    await this.deliveryRepo.save(delivery);
    return delivery;
  }

  async get(id: string): Promise<Delivery> {
    return this.deliveryRepo.findOne({ where: { deliveryId: id } });
  }

  async getAll(): Promise<Delivery[]> {
    return this.deliveryRepo.find();
  }

  async update(id: string, dto: UpdateDeliveryDto): Promise<void> {
    await this.deliveryRepo.update(id, dto);
  }

  async delete(id: string): Promise<void> {
    await this.deliveryRepo.delete(id);
  }
}
