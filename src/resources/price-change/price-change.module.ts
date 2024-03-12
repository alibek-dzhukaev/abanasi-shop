import { Module } from '@nestjs/common';
import { PriceChangeService } from './services/price-change.service';
import { PriceChangeController } from './controllers/price-change.controller';
import { PriceChange } from './entities/price-change.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PriceChangeRepository } from './repositories/price-change.repository';

@Module({
  imports: [TypeOrmModule.forFeature([PriceChange])],
  controllers: [PriceChangeController],
  providers: [PriceChangeService, PriceChangeRepository],
})
export class PriceChangeModule {}
