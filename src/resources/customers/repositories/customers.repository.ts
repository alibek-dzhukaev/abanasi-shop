import { InjectRepository } from '@nestjs/typeorm';
import { Customer } from '../entities/customer.entity';
import { Repository } from 'typeorm';
import { CreateCustomerDto } from '../dto/create-customer.dto';
import { UpdateCustomerDto } from '../dto/update-customer.dto';

export class CustomersRepository {
  constructor(
    @InjectRepository(Customer)
    private readonly customerRepo: Repository<Customer>,
  ) {}

  async create(dto: CreateCustomerDto): Promise<Customer> {
    const customer = this.customerRepo.create(dto);
    await this.customerRepo.save(customer);
    return customer;
  }

  async getOne(id: string): Promise<Customer> {
    return this.customerRepo.findOne({ where: { customerId: id } });
  }

  async getByFullName(firstName: string, lastName: string) {
    return this.customerRepo.findOne({
      where: { customerLname: lastName, customerFname: firstName },
    });
  }

  async get(): Promise<Customer[]> {
    return this.customerRepo.find();
  }

  async update(id: string, dto: UpdateCustomerDto) {
    await this.customerRepo.update(id, dto);
  }

  async delete(id: string) {
    await this.customerRepo.delete(id);
  }
}
