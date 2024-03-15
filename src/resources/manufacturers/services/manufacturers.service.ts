import { Injectable } from '@nestjs/common';
import { CreateManufacturerDto } from '../dto/create-manufacturer.dto';
import { UpdateManufacturerDto } from '../dto/update-manufacturer.dto';
import { ManufacturersRepository } from '../repositories/manufacturers.repository';
import { ManufactureResponse } from '../types';

@Injectable()
export class ManufacturersService {
  constructor(
    private readonly manufacturesRepository: ManufacturersRepository,
  ) {}
  create(
    createManufacturerDto: CreateManufacturerDto,
  ): Promise<ManufactureResponse> {
    return this.manufacturesRepository.create(createManufacturerDto);
  }

  findAll(): Promise<ManufactureResponse[]> {
    return this.manufacturesRepository.get();
  }

  findOne(id: string): Promise<ManufactureResponse> {
    return this.manufacturesRepository.getOne(id);
  }

  update(
    id: string,
    updateManufacturerDto: UpdateManufacturerDto,
  ): Promise<void> {
    return this.manufacturesRepository.update(id, updateManufacturerDto);
  }

  remove(id: string): Promise<void> {
    return this.manufacturesRepository.delete(id);
  }
}
