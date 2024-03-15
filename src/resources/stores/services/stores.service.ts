import { Injectable } from '@nestjs/common';
import { CreateStoreDto } from '../dto/create-store.dto';
import { UpdateStoreDto } from '../dto/update-store.dto';
import { Store } from '../entities/store.entity';
import { StoresRepository } from '../repositories/stores.repository';

@Injectable()
export class StoresService {
  constructor(private readonly storesRepository: StoresRepository) {}

  async create(createStoreDto: CreateStoreDto): Promise<Store> {
    return this.storesRepository.create(createStoreDto);
  }

  async findAll(): Promise<Store[]> {
    return this.storesRepository.get();
  }

  async findOne(id: string): Promise<Store> {
    return this.storesRepository.getOne(id);
  }

  async update(id: string, updateStoreDto: UpdateStoreDto): Promise<void> {
    await this.storesRepository.update(id, updateStoreDto);
  }

  async remove(id: string): Promise<void> {
    await this.storesRepository.delete(id);
  }
}
