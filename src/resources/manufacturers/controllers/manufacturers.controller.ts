import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ManufacturersService } from '../services/manufacturers.service';
import { CreateManufacturerDto } from '../dto/create-manufacturer.dto';
import { UpdateManufacturerDto } from '../dto/update-manufacturer.dto';
import {
  ApiCreatedResponse,
  ApiNoContentResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { ManufactureResponse } from '../types';

@ApiTags('Manufacturers')
@Controller('manufacturers')
export class ManufacturersController {
  constructor(private readonly manufacturersService: ManufacturersService) {}

  @ApiCreatedResponse({
    type: ManufactureResponse,
  })
  @Post()
  create(
    @Body() createManufacturerDto: CreateManufacturerDto,
  ): Promise<ManufactureResponse> {
    return this.manufacturersService.create(createManufacturerDto);
  }

  @ApiOkResponse({
    type: [ManufactureResponse],
  })
  @Get()
  findAll(): Promise<ManufactureResponse[]> {
    return this.manufacturersService.findAll();
  }

  @ApiOkResponse({
    type: ManufactureResponse,
  })
  @Get(':id')
  findOne(@Param('id') id: string): Promise<ManufactureResponse> {
    return this.manufacturersService.findOne(id);
  }

  @ApiNoContentResponse()
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateManufacturerDto: UpdateManufacturerDto,
  ): Promise<void> {
    return this.manufacturersService.update(id, updateManufacturerDto);
  }

  @ApiNoContentResponse()
  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.manufacturersService.remove(id);
  }
}
