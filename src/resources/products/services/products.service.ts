import { Injectable } from '@nestjs/common';
import { CreateProductDto } from '../dto/create-product.dto';
import { UpdateProductDto } from '../dto/update-product.dto';
import { Product } from '../entities/product.entity';
import { ProductsRepository } from '../repositories/products.repository';

@Injectable()
export class ProductsService {
  constructor(private readonly productsRepository: ProductsRepository) {}
  async create(createProductDto: CreateProductDto): Promise<Product> {
    return this.productsRepository.create(createProductDto);
  }

  async findAll(): Promise<Product[]> {
    return this.productsRepository.get();
  }

  async findOne(id: string): Promise<Product> {
    return this.productsRepository.getOne(id);
  }

  async update(id: string, updateProductDto: UpdateProductDto): Promise<void> {
    await this.productsRepository.update(id, updateProductDto);
  }

  async remove(id: string): Promise<void> {
    await this.productsRepository.delete(id);
  }
}
