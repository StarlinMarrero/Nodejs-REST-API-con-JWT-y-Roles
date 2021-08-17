import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm'

@Entity()
export class Product {

    @PrimaryGeneratedColumn()
    id: string

    @Column()
    category: string

    @Column()
    price: Number
} 