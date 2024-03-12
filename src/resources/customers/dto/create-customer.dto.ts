import { ApiProperty } from '@nestjs/swagger';

export class CreateCustomerDto {
  @ApiProperty()
  readonly customerFname: string;

  @ApiProperty()
  readonly customerLname: string;
}
