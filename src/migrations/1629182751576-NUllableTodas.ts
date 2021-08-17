import {MigrationInterface, QueryRunner} from "typeorm";

export class NUllableTodas1629182751576 implements MigrationInterface {
    name = 'NUllableTodas1629182751576'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."Products" ALTER COLUMN "name" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "public"."Products" ALTER COLUMN "price" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "public"."Products" ALTER COLUMN "imgUrl" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."Products" ALTER COLUMN "imgUrl" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "public"."Products" ALTER COLUMN "price" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "public"."Products" ALTER COLUMN "name" SET NOT NULL`);
    }

}
