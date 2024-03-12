import { Module } from '@nestjs/common';
import { PurchaseItemsService } from './services/purchase-items.service';
import { PurchaseItemsController } from './controllers/purchase-items.controller';
import { PurchaseItem } from './entities/purchase-item.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PurchaseItemsRepository } from './repositories/purchase-items.repository';

@Module({
  imports: [TypeOrmModule.forFeature([PurchaseItem])],
  controllers: [PurchaseItemsController],
  providers: [PurchaseItemsService, PurchaseItemsRepository],
})
export class PurchaseItemsModule {}
