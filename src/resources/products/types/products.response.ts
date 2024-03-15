import { PriceChange } from '../../price-change/entities/price-change.entity';
import { Delivery } from '../../deliveries/entities/delivery.entity';

export class ProductsResponse {
  readonly productId: string;
  readonly productName: string;
  readonly manufacturerId: string;
  readonly categoryId: string;
  readonly priceChanges: PriceChange[];
  deliveries: Delivery[];
}
