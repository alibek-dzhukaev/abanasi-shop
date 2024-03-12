import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PriceChangeService } from '../services/price-change.service';
import { CreatePriceChangeDto } from '../dto/create-price-change.dto';
import { UpdatePriceChangeDto } from '../dto/update-price-change.dto';

@Controller('price-change')
export class PriceChangeController {
  constructor(private readonly priceChangeService: PriceChangeService) {}

  @Post()
  create(@Body() createPriceChangeDto: CreatePriceChangeDto) {
    return this.priceChangeService.create(createPriceChangeDto);
  }

  @Get()
  findAll() {
    return this.priceChangeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.priceChangeService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePriceChangeDto: UpdatePriceChangeDto,
  ) {
    return this.priceChangeService.update(+id, updatePriceChangeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.priceChangeService.remove(+id);
  }
}
