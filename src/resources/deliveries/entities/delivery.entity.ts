import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'delivery' })
export class Delivery {
  @PrimaryGeneratedColumn('uuid', { name: 'delivery_id' })
  deliveryId: string;

  @Column({ name: 'product_id' })
  productId: string;

  @Column({ name: 'store_id' })
  storeId: string;

  @Column({ name: 'delivery_date' })
  deliveryDate: string;

  @Column({ name: 'product_count', type: 'int' })
  productCount: number;
}
