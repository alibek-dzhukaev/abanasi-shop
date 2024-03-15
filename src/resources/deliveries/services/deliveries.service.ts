import { Injectable } from '@nestjs/common';
import { CreateDeliveryDto } from '../dto/create-delivery.dto';
import { UpdateDeliveryDto } from '../dto/update-delivery.dto';
import { DeliveriesRepository } from '../repositories/deliveries.repository';
import { DeliveryResponse } from '../types';
import { StoresService } from '../../stores/services/stores.service';
import { ProductsService } from '../../products/services/products.service';

@Injectable()
export class DeliveriesService {
  constructor(
    private readonly deliveryRepository: DeliveriesRepository,
    private readonly storesService: StoresService,
    private readonly productsService: ProductsService,
  ) {}
  async create(createDeliveryDto: CreateDeliveryDto) {
    return this.deliveryRepository.create(createDeliveryDto);
  }

  async findAll() {
    return this.deliveryRepository.getAll();
  }

  async findOne(id: string): Promise<DeliveryResponse> {
    const { deliveryId, deliveryDate, productCount, productId, storeId } =
      await this.deliveryRepository.get(id);
    const store = await this.storesService.findOne(storeId);
    const product = await this.productsService.findOne(productId);
    return {
      deliveryDate,
      deliveryId,
      productCount,
      product,
      store,
    };
  }

  async update(id: string, updateDeliveryDto: UpdateDeliveryDto) {
    await this.deliveryRepository.update(id, updateDeliveryDto);
  }

  async remove(id: string) {
    await this.deliveryRepository.delete(id);
  }
}
