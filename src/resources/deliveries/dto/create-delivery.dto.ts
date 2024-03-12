import { ApiProperty } from '@nestjs/swagger';

export class CreateDeliveryDto {
  @ApiProperty()
  readonly productId: string;

  @ApiProperty()
  readonly storeId: string;

  @ApiProperty()
  readonly deliveryDate: string;

  @ApiProperty()
  readonly productCount: number;
}
