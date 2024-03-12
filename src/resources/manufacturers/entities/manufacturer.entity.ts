import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Product } from '../../products/entities/product.entity';

@Entity({ name: 'manufacturer' })
export class Manufacturer {
  @PrimaryGeneratedColumn('uuid', { name: 'manufacturer_id' })
  manufacturerId: string;

  @Column({ type: 'varchar', name: 'manufacturer_name' })
  manufacturerName: string;

  @OneToMany(() => Product, (product) => product.manufacturerId)
  products: Product[];
}
