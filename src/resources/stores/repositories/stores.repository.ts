import { InjectRepository } from '@nestjs/typeorm';
import { Store } from '../entities/store.entity';
import { Repository } from 'typeorm';
import { CreateStoreDto } from '../dto/create-store.dto';
import { UpdateStoreDto } from '../dto/update-store.dto';

export class StoresRepository {
  constructor(
    @InjectRepository(Store)
    private readonly storeRepository: Repository<Store>,
  ) {}

  async create(dto: CreateStoreDto): Promise<Store> {
    const store = this.storeRepository.create(dto);
    await this.storeRepository.save(store);
    return store;
  }

  async get(): Promise<Store[]> {
    return this.storeRepository.find();
  }

  async getOne(id: string): Promise<Store> {
    return this.storeRepository.findOne({ where: { storeId: id } });
  }

  async update(id: string, dto: UpdateStoreDto): Promise<void> {
    await this.storeRepository.update(id, dto);
  }

  async delete(id: string): Promise<void> {
    await this.storeRepository.delete(id);
  }
}
