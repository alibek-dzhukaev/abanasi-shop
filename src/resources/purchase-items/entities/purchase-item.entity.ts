import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'purchase_item' })
export class PurchaseItem {
  @PrimaryGeneratedColumn('uuid', { name: 'purchase_item_id' })
  purchaseItemId: string;

  @Column({ name: 'purchase_id' })
  purchaseId: string;

  @Column({ name: 'product_id' })
  productId: string;

  @Column({ name: 'product_count', type: 'int' })
  productCount: number;

  @Column({ name: 'product_price', type: 'int' })
  productPrice: number;
}
