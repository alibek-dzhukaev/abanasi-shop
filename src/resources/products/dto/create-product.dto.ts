import { ApiProperty } from '@nestjs/swagger';

export class CreateProductDto {
  @ApiProperty()
  readonly productName: string;

  @ApiProperty()
  readonly manufacturerId: string;

  @ApiProperty()
  readonly categoryId: string;
}
