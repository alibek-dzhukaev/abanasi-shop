import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import { CreateCategoryDto } from '../dto/create-category.dto';
import { UpdateCategoryDto } from '../dto/update-category.dto';
import { CategoriesRepository } from '../repositories/categories.repository';

@Injectable()
export class CategoriesService {
  private readonly logger = new Logger(CategoriesService.name);

  constructor(private readonly categoriesRepository: CategoriesRepository) {}

  async create(createCategoryDto: CreateCategoryDto) {
    const doesExist = await this.categoriesRepository.getByName(
      createCategoryDto.categoryName,
    );

    if (doesExist) {
      this.logger.error(
        'category already exists',
        createCategoryDto.categoryName,
      );
      throw new BadRequestException('category already exists');
    }

    const category = await this.categoriesRepository.create(createCategoryDto);
    this.logger.verbose('category | create');
    return category;
  }

  async findAll() {
    return this.categoriesRepository.getAll();
  }

  async findOne(id: string) {
    return this.categoriesRepository.get(id);
  }

  async update(id: string, updateCategoryDto: UpdateCategoryDto) {
    return this.categoriesRepository.update(id, updateCategoryDto);
  }

  async remove(id: string) {
    await this.categoriesRepository.delete(id);
    this.logger.log('remove', 'category');
  }
}
