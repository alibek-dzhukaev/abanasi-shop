import { Module } from '@nestjs/common';
import { DeliveriesService } from './services/deliveries.service';
import { DeliveriesController } from './controllers/deliveries.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Delivery } from './entities/delivery.entity';
import { DeliveriesRepository } from './repositories/deliveries.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Delivery])],
  controllers: [DeliveriesController],
  providers: [DeliveriesService, DeliveriesRepository],
})
export class DeliveriesModule {}
