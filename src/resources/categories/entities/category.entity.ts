import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Product } from '../../products/entities/product.entity';

@Entity({ name: 'category' })
export class Category {
  @PrimaryGeneratedColumn('uuid', { name: 'category_id' })
  categoryId: string;

  @Column({ type: 'varchar', name: 'category_name' })
  categoryName: string;

  @OneToMany(() => Product, (product) => product.categoryId)
  products: Product[];
}
