import { Module } from '@nestjs/common';
import { StoresService } from './services/stores.service';
import { StoresController } from './controllers/stores.controller';
import { Store } from './entities/store.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StoresRepository } from './repositories/stores.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Store])],
  controllers: [StoresController],
  providers: [StoresService, StoresRepository],
  exports: [StoresService],
})
export class StoresModule {}
