import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { StoresService } from '../services/stores.service';
import { CreateStoreDto } from '../dto/create-store.dto';
import { UpdateStoreDto } from '../dto/update-store.dto';
import {
  ApiCreatedResponse,
  ApiNoContentResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { StoreResponse } from '../types';

@ApiTags('Stores')
@Controller('stores')
export class StoresController {
  constructor(private readonly storesService: StoresService) {}

  @ApiCreatedResponse({
    type: StoreResponse,
  })
  @Post()
  create(@Body() createStoreDto: CreateStoreDto): Promise<StoreResponse> {
    return this.storesService.create(createStoreDto);
  }

  @ApiOkResponse({
    type: [StoreResponse],
  })
  @Get()
  findAll(): Promise<StoreResponse[]> {
    return this.storesService.findAll();
  }

  @ApiOkResponse({
    type: StoreResponse,
  })
  @Get(':id')
  findOne(@Param('id') id: string): Promise<StoreResponse> {
    return this.storesService.findOne(id);
  }

  @ApiNoContentResponse()
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateStoreDto: UpdateStoreDto,
  ): Promise<void> {
    return this.storesService.update(id, updateStoreDto);
  }

  @ApiNoContentResponse()
  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.storesService.remove(id);
  }
}
