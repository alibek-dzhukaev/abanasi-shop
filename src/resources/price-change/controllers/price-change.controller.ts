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
import {
  ApiCreatedResponse,
  ApiNoContentResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { PriceChangeResponse } from '../types';

@ApiTags('Price Change')
@Controller('price-change')
export class PriceChangeController {
  constructor(private readonly priceChangeService: PriceChangeService) {}

  @ApiCreatedResponse({
    type: PriceChangeResponse,
  })
  @Post()
  create(@Body() createPriceChangeDto: CreatePriceChangeDto) {
    return this.priceChangeService.create(createPriceChangeDto);
  }

  @ApiOkResponse({
    type: [PriceChangeResponse],
  })
  @Get()
  findAll() {
    return this.priceChangeService.findAll();
  }

  @ApiOkResponse({
    type: PriceChangeResponse,
  })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.priceChangeService.findOne(id);
  }

  @ApiNoContentResponse()
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePriceChangeDto: UpdatePriceChangeDto,
  ) {
    return this.priceChangeService.update(id, updatePriceChangeDto);
  }

  @ApiNoContentResponse()
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.priceChangeService.remove(id);
  }
}
