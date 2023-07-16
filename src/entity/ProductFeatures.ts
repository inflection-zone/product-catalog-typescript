import {Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, OneToMany } from 'typeorm'
import { Product} from "./Product"
import {Feature} from "./Feature"

@Entity()
export class ProductFeatures{

    @OneToOne(() => Product)
    @JoinColumn()
    productId: Product

    @OneToMany(()=> Feature, (feature)=>feature.id) //feature.id? isn't it many features to one product
    featureId: Feature

}