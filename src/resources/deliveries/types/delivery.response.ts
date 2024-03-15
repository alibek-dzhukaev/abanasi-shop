import { Product } from '../../products/entities/product.entity';
import { Store } from '../../stores/entities/store.entity';
import { ApiProperty } from '@nestjs/swagger';

export class DeliveryResponse {
  @ApiProperty()
  readonly deliveryId: string;

  @ApiProperty()
  readonly product: Product;

  @ApiProperty()
  readonly store: Store;

  @ApiProperty()
  readonly deliveryDate: string;

  @ApiProperty()
  readonly productCount: number;
}
