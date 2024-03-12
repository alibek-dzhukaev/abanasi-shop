import { MigrationInterface, QueryRunner } from "typeorm";

export class Tables1710219026535 implements MigrationInterface {
    name = 'Tables1710219026535'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "store" ("store_id" uuid NOT NULL DEFAULT uuid_generate_v4(), "store_name" character varying NOT NULL, CONSTRAINT "PK_94d7b0f600366ceb5c960069687" PRIMARY KEY ("store_id"))`);
        await queryRunner.query(`CREATE TABLE "purchase_item" ("purchase_id" uuid NOT NULL DEFAULT uuid_generate_v4(), "product_id" character varying NOT NULL, "product_count" character varying NOT NULL, "product_price" character varying NOT NULL, CONSTRAINT "PK_350d9b7c4792561317ca3a37e1d" PRIMARY KEY ("purchase_id"))`);
        await queryRunner.query(`CREATE TABLE "product" ("product_id" uuid NOT NULL DEFAULT uuid_generate_v4(), "product_name" character varying NOT NULL, "manufacturer_id" character varying NOT NULL, "category_id" character varying NOT NULL, CONSTRAINT "PK_1de6a4421ff0c410d75af27aeee" PRIMARY KEY ("product_id"))`);
        await queryRunner.query(`CREATE TABLE "price_change" ("price_change_id" uuid NOT NULL DEFAULT uuid_generate_v4(), "date_price_change" character varying NOT NULL, "new_price" integer NOT NULL, CONSTRAINT "PK_13a18f05777f7d6811c98d01765" PRIMARY KEY ("price_change_id"))`);
        await queryRunner.query(`CREATE TABLE "purchase" ("purchase_id" uuid NOT NULL DEFAULT uuid_generate_v4(), "customer_id" character varying NOT NULL, "store_id" character varying NOT NULL, "purchase_date" character varying NOT NULL, CONSTRAINT "PK_fb8b774c1e9156a025b67133750" PRIMARY KEY ("purchase_id"))`);
        await queryRunner.query(`CREATE TABLE "manufacturer" ("manufacturer_id" uuid NOT NULL DEFAULT uuid_generate_v4(), "manufacturer_name" character varying NOT NULL, CONSTRAINT "PK_534493203ff66587cb75492c8a9" PRIMARY KEY ("manufacturer_id"))`);
        await queryRunner.query(`CREATE TABLE "delivery" ("product_id" uuid NOT NULL DEFAULT uuid_generate_v4(), "store_id" character varying NOT NULL, "delivery_date" character varying NOT NULL, "product_count" character varying NOT NULL, CONSTRAINT "PK_bc722c191194d33e0d088f0780c" PRIMARY KEY ("product_id"))`);
        await queryRunner.query(`CREATE TABLE "customer" ("customer_id" uuid NOT NULL DEFAULT uuid_generate_v4(), "customer_fname" character varying NOT NULL, "customer_lname" character varying NOT NULL, CONSTRAINT "PK_cde3d123fc6077bcd75eb051226" PRIMARY KEY ("customer_id"))`);
        await queryRunner.query(`CREATE TABLE "category" ("category_id" uuid NOT NULL DEFAULT uuid_generate_v4(), "category_name" character varying NOT NULL, CONSTRAINT "PK_cc7f32b7ab33c70b9e715afae84" PRIMARY KEY ("category_id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "category"`);
        await queryRunner.query(`DROP TABLE "customer"`);
        await queryRunner.query(`DROP TABLE "delivery"`);
        await queryRunner.query(`DROP TABLE "manufacturer"`);
        await queryRunner.query(`DROP TABLE "purchase"`);
        await queryRunner.query(`DROP TABLE "price_change"`);
        await queryRunner.query(`DROP TABLE "product"`);
        await queryRunner.query(`DROP TABLE "purchase_item"`);
        await queryRunner.query(`DROP TABLE "store"`);
    }

}
