import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CustomersService } from '../services/customers.service';
import { CreateCustomerDto } from '../dto/create-customer.dto';
import { UpdateCustomerDto } from '../dto/update-customer.dto';
import {
  ApiCreatedResponse,
  ApiNoContentResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { CustomerResponse } from '../types';
import { Customer } from '../entities/customer.entity';

@ApiTags('Customers')
@Controller('customers')
export class CustomersController {
  constructor(private readonly customersService: CustomersService) {}

  @ApiCreatedResponse({
    type: CustomerResponse,
  })
  @Post()
  create(@Body() createCustomerDto: CreateCustomerDto): Promise<Customer> {
    return this.customersService.create(createCustomerDto);
  }

  @ApiOkResponse({
    type: [CustomerResponse],
  })
  @Get()
  findAll(): Promise<Customer[]> {
    return this.customersService.findAll();
  }

  @ApiOkResponse({
    type: CustomerResponse,
  })
  @Get(':id')
  findOne(@Param('id') id: string): Promise<Customer> {
    return this.customersService.findOne(id);
  }

  @ApiNoContentResponse()
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCustomerDto: UpdateCustomerDto,
  ): Promise<void> {
    return this.customersService.update(id, updateCustomerDto);
  }

  @ApiNoContentResponse()
  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.customersService.remove(id);
  }
}
