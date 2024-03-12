import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Purchase } from '../../purchases/entities/purchase.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity({ name: 'customer' })
export class Customer {
  @ApiProperty()
  @PrimaryGeneratedColumn('uuid', { name: 'customer_id' })
  customerId: string;

  @ApiProperty()
  @Column({ type: 'varchar', name: 'customer_fname' })
  customerFname: string;

  @ApiProperty()
  @Column({ type: 'varchar', name: 'customer_lname' })
  customerLname: string;

  @OneToMany(() => Purchase, (purchase) => purchase.customerId)
  purchases: Purchase[];
}
