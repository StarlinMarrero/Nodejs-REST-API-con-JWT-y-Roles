import {BaseEntity, Column, Entity, PrimaryGeneratedColumn} from 'typeorm'
import 'reflect-metadata'

@Entity('Products')
export class Product {

    @PrimaryGeneratedColumn()
    id: string

    @Column({nullable: true })
    name: string

    @Column({nullable: true })
    category: string

    @Column({nullable: true })
    price: Number

    @Column({nullable: true })
    imgUrl: string
} 