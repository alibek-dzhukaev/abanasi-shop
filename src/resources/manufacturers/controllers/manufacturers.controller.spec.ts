import { Test, TestingModule } from '@nestjs/testing';
import { ManufacturersController } from './manufacturers.controller';
import { ManufacturersService } from '../services/manufacturers.service';

describe('ManufacturersController', () => {
  let controller: ManufacturersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ManufacturersController],
      providers: [ManufacturersService],
    }).compile();

    controller = module.get<ManufacturersController>(ManufacturersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
