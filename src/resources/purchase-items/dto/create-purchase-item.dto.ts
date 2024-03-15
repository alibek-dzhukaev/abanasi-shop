import { ApiProperty } from '@nestjs/swagger';

export class CreatePurchaseItemDto {
  @ApiProperty()
  readonly purchaseId: string;

  @ApiProperty()
  readonly productId: string;

  @ApiProperty()
  readonly productCount: number;

  @ApiProperty()
  readonly productPrice: number;
}
