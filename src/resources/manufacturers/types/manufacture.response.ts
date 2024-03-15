import { Product } from '../../products/entities/product.entity';

export class ManufactureResponse {
  readonly manufacturerId: string;
  readonly manufacturerName: string;
  readonly products: Product[];
}
