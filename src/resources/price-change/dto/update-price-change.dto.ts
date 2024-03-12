import { PartialType } from '@nestjs/mapped-types';
import { CreatePriceChangeDto } from './create-price-change.dto';

export class UpdatePriceChangeDto extends PartialType(CreatePriceChangeDto) {}
