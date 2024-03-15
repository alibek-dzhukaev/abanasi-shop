import { ApiProperty } from '@nestjs/swagger';

export class CreatePurchaseDto {
  @ApiProperty()
  readonly customerId: string;

  @ApiProperty()
  readonly storeId: string;

  @ApiProperty()
  readonly purchaseDate: string;
}
