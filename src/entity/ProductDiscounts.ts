import {Entity, PrimaryGeneratedColumn, Column, ManyToMany, ManyToOne, OneToMany, OneToOne} from "typeorm"
import { Merchant } from './Merchant'
import { Product } from './Product'


@Entity() 
export class ProductDiscounts{

    @OneToOne(()=>Product)
    productId: Product

    @OneToOne(()=>Merchant)
    merchantId: Merchant

    @Column()
    discountType: string

    @Column()
    discount: number

    @Column()
    discountForVolume: number
    
}