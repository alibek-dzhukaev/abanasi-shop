import { Module } from '@nestjs/common';
import { ManufacturersService } from './services/manufacturers.service';
import { ManufacturersController } from './controllers/manufacturers.controller';
import { Manufacturer } from './entities/manufacturer.entity';
import { Product } from '../products/entities/product.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ManufacturersRepository } from './repositories/manufacturers.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Manufacturer, Product])],
  controllers: [ManufacturersController],
  providers: [ManufacturersService, ManufacturersRepository],
})
export class ManufacturersModule {}
