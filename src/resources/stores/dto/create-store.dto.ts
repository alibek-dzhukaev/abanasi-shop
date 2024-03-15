import { ApiProperty } from '@nestjs/swagger';

export class CreateStoreDto {
  @ApiProperty()
  readonly storeName: string;
}
