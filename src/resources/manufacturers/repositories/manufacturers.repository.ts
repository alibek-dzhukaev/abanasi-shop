import { InjectRepository } from '@nestjs/typeorm';
import { Manufacturer } from '../entities/manufacturer.entity';
import { Repository } from 'typeorm';
import { UpdateManufacturerDto } from '../dto/update-manufacturer.dto';

export class ManufacturersRepository {
  constructor(
    @InjectRepository(Manufacturer)
    private readonly manufacturerRepo: Repository<Manufacturer>,
  ) {}

  async create(dto: UpdateManufacturerDto): Promise<Manufacturer> {
    const manufacture = this.manufacturerRepo.create(dto);
    await this.manufacturerRepo.save(manufacture);
    return manufacture;
  }

  async get(): Promise<Manufacturer[]> {
    return this.manufacturerRepo.find();
  }

  async getOne(id: string): Promise<Manufacturer> {
    return this.manufacturerRepo.findOne({ where: { manufacturerId: id } });
  }

  async update(id: string, dto: UpdateManufacturerDto): Promise<void> {
    await this.manufacturerRepo.update(id, dto);
  }

  async delete(id: string): Promise<void> {
    await this.manufacturerRepo.delete(id);
  }
}
