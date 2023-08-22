import "reflect-metadata"
import { DataSource } from "typeorm"

import { Customer } from "./models/customer"
import { Inventory } from "./models/inventory"
import { Merchant } from "./models/merchant"
import { ProductMerchant } from "./models/product.merchant"
import { CustomerReview } from './models/customer.review'
import { ProductDiscount } from './models/product.discount'
import { ProductImage } from './models/product.image'


export class DatabaseConnectorTypeorm {

    static _source = new DataSource({
        type: "mysql",
        host: "localhost",
        port: 3306,
        username: "root",
        password: "root",
        database: "prodCat",
        synchronize: true,
        logging: true,
        entities: [Customer, Merchant, Inventory, ProductMerchant, CustomerReview, ProductDiscount,
        ProductImage],
        migrations: ["src/migration/**/*.ts"],
        subscribers: [],
    })

    public connect = async() => {
        DatabaseConnectorTypeorm._source.initialize()
    }

    
}


export const Source = DatabaseConnectorTypeorm._source

