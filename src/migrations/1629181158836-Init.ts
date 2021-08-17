import {MigrationInterface, QueryRunner} from "typeorm";

export class Init1629181158836 implements MigrationInterface {
    name = 'Init1629181158836'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "Products" ("id" SERIAL NOT NULL, "category" character varying NOT NULL, "price" integer NOT NULL, CONSTRAINT "PK_36a07cc432789830e7fb7b58a83" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "Products"`);
    }

}
