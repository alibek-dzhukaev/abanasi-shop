import { ApiProperty } from '@nestjs/swagger';

export class CategoriesResponse {
  @ApiProperty()
  readonly categoryId: string;

  @ApiProperty()
  readonly categoryName: string;
}
