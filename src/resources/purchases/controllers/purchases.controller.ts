import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PurchasesService } from '../services/purchases.service';
import { CreatePurchaseDto } from '../dto/create-purchase.dto';
import { UpdatePurchaseDto } from '../dto/update-purchase.dto';
import {
  ApiCreatedResponse,
  ApiNoContentResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { PurchaseResponse } from '../types';

@ApiTags('Purchases')
@Controller('purchases')
export class PurchasesController {
  constructor(private readonly purchasesService: PurchasesService) {}

  @ApiCreatedResponse({
    type: PurchaseResponse,
  })
  @Post()
  create(
    @Body() createPurchaseDto: CreatePurchaseDto,
  ): Promise<PurchaseResponse> {
    return this.purchasesService.create(createPurchaseDto);
  }

  @ApiOkResponse({
    type: [PurchaseResponse],
  })
  @Get()
  findAll(): Promise<PurchaseResponse[]> {
    return this.purchasesService.findAll();
  }

  @ApiOkResponse({
    type: PurchaseResponse,
  })
  @Get(':id')
  findOne(@Param('id') id: string): Promise<PurchaseResponse> {
    return this.purchasesService.findOne(id);
  }

  @ApiNoContentResponse()
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePurchaseDto: UpdatePurchaseDto,
  ): Promise<void> {
    return this.purchasesService.update(id, updatePurchaseDto);
  }

  @ApiNoContentResponse()
  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.purchasesService.remove(id);
  }
}
