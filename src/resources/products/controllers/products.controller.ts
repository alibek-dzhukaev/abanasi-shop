import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ProductsService } from '../services/products.service';
import { CreateProductDto } from '../dto/create-product.dto';
import { UpdateProductDto } from '../dto/update-product.dto';
import {
  ApiCreatedResponse,
  ApiNoContentResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { ProductsResponse } from '../types';
import { Product } from '../entities/product.entity';

@ApiTags('Products')
@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @ApiCreatedResponse({
    type: ProductsResponse,
  })
  @Post()
  create(
    @Body() createProductDto: CreateProductDto,
  ): Promise<ProductsResponse> {
    return this.productsService.create(createProductDto);
  }

  @ApiOkResponse({
    type: [ProductsResponse],
  })
  @Get()
  findAll(): Promise<ProductsResponse[]> {
    return this.productsService.findAll();
  }

  @ApiOkResponse({
    type: ProductsResponse,
  })
  @Get(':id')
  findOne(@Param('id') id: string): Promise<ProductsResponse> {
    return this.productsService.findOne(id);
  }

  @ApiNoContentResponse()
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateProductDto: UpdateProductDto,
  ): Promise<void> {
    return this.productsService.update(id, updateProductDto);
  }

  @ApiNoContentResponse()
  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.productsService.remove(id);
  }
}
