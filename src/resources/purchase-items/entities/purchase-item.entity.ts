import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'purchase_item' })
export class PurchaseItem {
  @PrimaryGeneratedColumn('uuid', { name: 'purchase_item_id' })
  purchaseItemId: string;

  @Column({ name: 'purchase_id' })
  purchaseId: string;

  @Column({ name: 'product_id' })
  productId: string;

  @Column({ name: 'product_count' })
  productCount: string;

  @Column({ name: 'product_price' })
  productPrice: string;
}
