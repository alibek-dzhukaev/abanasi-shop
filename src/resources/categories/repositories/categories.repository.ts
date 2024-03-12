import { Repository } from 'typeorm';
import { Category } from '../entities/category.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateCategoryDto } from '../dto/create-category.dto';
import { UpdateCategoryDto } from '../dto/update-category.dto';

export class CategoriesRepository {
  public constructor(
    @InjectRepository(Category)
    private readonly categoryRepo: Repository<Category>,
  ) {}

  async create(dto: CreateCategoryDto): Promise<Category> {
    const category = this.categoryRepo.create(dto);
    await this.categoryRepo.save(category);
    return category;
  }

  async getAll(): Promise<Category[]> {
    return this.categoryRepo.find();
  }

  async get(id: string): Promise<Category> {
    return this.categoryRepo.findOne({ where: { categoryId: id } });
  }

  async getByName(categoryName: string) {
    return this.categoryRepo.findOne({ where: { categoryName } });
  }

  async update(id: string, dto: UpdateCategoryDto) {
    await this.categoryRepo.update(id, dto);
  }

  async delete(id: string) {
    await this.categoryRepo.delete(id);
  }
}
