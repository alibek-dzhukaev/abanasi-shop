import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PurchaseItemsService } from '../services/purchase-items.service';
import { CreatePurchaseItemDto } from '../dto/create-purchase-item.dto';
import { UpdatePurchaseItemDto } from '../dto/update-purchase-item.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Purchase Items')
@Controller('purchase-items')
export class PurchaseItemsController {
  constructor(private readonly purchaseItemService: PurchaseItemsService) {}

  @Post()
  create(@Body() createPurchaseItemDto: CreatePurchaseItemDto) {
    return this.purchaseItemService.create(createPurchaseItemDto);
  }

  @Get()
  findAll() {
    return this.purchaseItemService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.purchaseItemService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePurchaseItemDto: UpdatePurchaseItemDto,
  ) {
    return this.purchaseItemService.update(id, updatePurchaseItemDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.purchaseItemService.remove(id);
  }
}
