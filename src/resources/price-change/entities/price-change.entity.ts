import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'price_change' })
export class PriceChange {
  @PrimaryGeneratedColumn('uuid', { name: 'price_change_id' })
  priceChangeId: string;

  @Column({ name: 'date_price_change' })
  datePriceChange: string;

  @Column({ type: 'real', name: 'new_price' })
  newPrice: string;

  @Column({ type: 'varchar', name: 'product_id' })
  productId: string;
}
