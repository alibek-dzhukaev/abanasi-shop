import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { PriceChange } from '../../price-change/entities/price-change.entity';
import { Delivery } from '../../deliveries/entities/delivery.entity';
import { PurchaseItem } from '../../purchase-items/entities/purchase-item.entity';

@Entity({ name: 'product' })
export class Product {
  @PrimaryGeneratedColumn('uuid', { name: 'product_id' })
  productId: string;

  @Column({ name: 'product_name' })
  productName: string;

  @Column({ type: 'varchar', name: 'manufacturer_id' })
  manufacturerId: string;

  @Column({ type: 'varchar', name: 'category_id' })
  categoryId: string;

  @OneToMany(() => PriceChange, (priceChange) => priceChange.productId)
  priceChanges: PriceChange[];

  @OneToMany(() => Delivery, (delivery) => delivery.productId)
  deliveries: Delivery[];

  @OneToMany(() => PurchaseItem, (purchaseItem) => purchaseItem.productId)
  purchaseItems: PurchaseItem[];
}
