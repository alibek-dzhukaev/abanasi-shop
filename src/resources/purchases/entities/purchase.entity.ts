import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { PurchaseItem } from '../../purchase-items/entities/purchase-item.entity';

@Entity({ name: 'purchase' })
export class Purchase {
  @PrimaryGeneratedColumn('uuid', { name: 'purchase_id' })
  purchaseId: string;

  @Column({ name: 'customer_id' })
  customerId: string;

  @Column({ name: 'store_id' })
  storeId: string;

  @Column({ name: 'purchase_date' })
  purchaseDate: string;

  @OneToMany(() => PurchaseItem, (purchaseItem) => purchaseItem.purchaseId)
  purchaseItems: PurchaseItem[];
}
