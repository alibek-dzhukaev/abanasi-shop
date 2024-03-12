import { ApiProperty } from '@nestjs/swagger';

export class CustomerResponse {
  @ApiProperty()
  readonly customerId: string;

  @ApiProperty()
  readonly customerFname: string;

  @ApiProperty()
  readonly customerLname: string;
}
