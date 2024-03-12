import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateCustomerDto } from '../dto/create-customer.dto';
import { UpdateCustomerDto } from '../dto/update-customer.dto';
import { CustomersRepository } from '../repositories/customers.repository';
import { Customer } from '../entities/customer.entity';

@Injectable()
export class CustomersService {
  constructor(private readonly customerRepository: CustomersRepository) {}

  async create(createCustomerDto: CreateCustomerDto): Promise<Customer> {
    const customer = await this.customerRepository.getByFullName(
      createCustomerDto.customerFname,
      createCustomerDto.customerLname,
    );
    if (customer) {
      throw new BadRequestException('customer ');
    }

    return this.customerRepository.create(createCustomerDto);
  }

  async findAll(): Promise<Customer[]> {
    return this.customerRepository.get();
  }

  async findOne(id: string) {
    return this.customerRepository.getOne(id);
  }

  async update(id: string, updateCustomerDto: UpdateCustomerDto) {
    await this.customerRepository.update(id, updateCustomerDto);
  }

  async remove(id: string) {
    await this.customerRepository.delete(id);
  }
}
