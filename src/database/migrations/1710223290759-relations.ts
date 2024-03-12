import { MigrationInterface, QueryRunner } from 'typeorm';

export class Relations1710223290759 implements MigrationInterface {
  name = 'Relations1710223290759';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "purchase_item" ADD "purchase_item_id" uuid NOT NULL DEFAULT uuid_generate_v4()`,
    );
    await queryRunner.query(
      `ALTER TABLE "purchase_item" DROP CONSTRAINT "PK_350d9b7c4792561317ca3a37e1d"`,
    );
    await queryRunner.query(
      `ALTER TABLE "purchase_item" ADD CONSTRAINT "PK_625fdb5e86b1be21a962aa9c442" PRIMARY KEY ("purchase_id", "purchase_item_id")`,
    );
    await queryRunner.query(
      `ALTER TABLE "price_change" ADD "product_id" character varying NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "purchase_item" DROP CONSTRAINT "PK_625fdb5e86b1be21a962aa9c442"`,
    );
    await queryRunner.query(
      `ALTER TABLE "purchase_item" ADD CONSTRAINT "PK_0d339b302a5af227a59551e5665" PRIMARY KEY ("purchase_item_id")`,
    );
    await queryRunner.query(
      `ALTER TABLE "purchase_item" DROP COLUMN "purchase_id"`,
    );
    await queryRunner.query(
      `ALTER TABLE "purchase_item" ADD "purchase_id" character varying NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "price_change" DROP COLUMN "new_price"`,
    );
    await queryRunner.query(
      `ALTER TABLE "price_change" ADD "new_price" real NOT NULL`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "price_change" DROP COLUMN "new_price"`,
    );
    await queryRunner.query(
      `ALTER TABLE "price_change" ADD "new_price" integer NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "purchase_item" DROP COLUMN "purchase_id"`,
    );
    await queryRunner.query(
      `ALTER TABLE "purchase_item" ADD "purchase_id" uuid NOT NULL DEFAULT uuid_generate_v4()`,
    );
    await queryRunner.query(
      `ALTER TABLE "purchase_item" DROP CONSTRAINT "PK_0d339b302a5af227a59551e5665"`,
    );
    await queryRunner.query(
      `ALTER TABLE "purchase_item" ADD CONSTRAINT "PK_625fdb5e86b1be21a962aa9c442" PRIMARY KEY ("purchase_id", "purchase_item_id")`,
    );
    await queryRunner.query(
      `ALTER TABLE "price_change" DROP COLUMN "product_id"`,
    );
    await queryRunner.query(
      `ALTER TABLE "purchase_item" DROP CONSTRAINT "PK_625fdb5e86b1be21a962aa9c442"`,
    );
    await queryRunner.query(
      `ALTER TABLE "purchase_item" ADD CONSTRAINT "PK_350d9b7c4792561317ca3a37e1d" PRIMARY KEY ("purchase_id")`,
    );
    await queryRunner.query(
      `ALTER TABLE "purchase_item" DROP COLUMN "purchase_item_id"`,
    );
  }
}
