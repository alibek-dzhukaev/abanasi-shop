import { Delivery } from '../../deliveries/entities/delivery.entity';
import { Purchase } from '../../purchases/entities/purchase.entity';

export class StoreResponse {
  readonly storeId: string;
  readonly storeName: string;
  readonly deliveries: Delivery[];
  readonly purchases: Purchase[];
}
