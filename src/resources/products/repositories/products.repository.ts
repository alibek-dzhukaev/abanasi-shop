import { InjectRepository } from '@nestjs/typeorm';
import { Product } from '../entities/product.entity';
import { Repository } from 'typeorm';
import { UpdateProductDto } from '../dto/update-product.dto';
import { CreateProductDto } from '../dto/create-product.dto';

export class ProductsRepository {
  constructor(
    @InjectRepository(Product)
    private readonly productRepo: Repository<Product>,
  ) {}

  async create(dto: CreateProductDto): Promise<Product> {
    const product = this.productRepo.create(dto);
    await this.productRepo.save(product);
    return product;
  }

  async get(): Promise<Product[]> {
    return this.productRepo.find();
  }

  async getOne(id: string): Promise<Product> {
    return this.productRepo.findOne({ where: { productId: id } });
  }

  async update(id: string, dto: UpdateProductDto) {
    await this.productRepo.update(id, dto);
  }

  async delete(id: string) {
    await this.productRepo.delete(id);
  }
}
