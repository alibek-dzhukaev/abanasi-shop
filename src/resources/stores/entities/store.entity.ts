import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Delivery } from '../../deliveries/entities/delivery.entity';
import { Purchase } from '../../purchases/entities/purchase.entity';

@Entity({ name: 'store' })
export class Store {
  @PrimaryGeneratedColumn('uuid', { name: 'store_id' })
  storeId: string;

  @Column({ name: 'store_name' })
  storeName: string;

  @OneToMany(() => Delivery, (delivery) => delivery.storeId)
  deliveries: Delivery[];

  @OneToMany(() => Purchase, (purchase) => purchase.storeId)
  purchases: Purchase[];
}
