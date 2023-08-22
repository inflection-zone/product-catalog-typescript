import express from 'express'
import { register as customerRegister} from '../routes/customer.routes'
import { register as merchantRegister} from '../routes/merchant.routes'
import { register as inventoryRegister} from '../routes/inventory.routes'
import { register as pmRegister} from '../routes/product.merchant.routes'
import Application from '../app'

export class Router {

    private _app: express.Application;

    constructor(app: express.Application) {
        this._app = app;
    }

    public init = async (): Promise<boolean> => {
        return new Promise((resolve, reject) => {
            try {
                this._app.get('/api/v1/', (req: express.Request, res: express.Response) => {
                    res.send({
                        message: "Product Catalog Service API Version 1"
                    })

                    customerRegister(this._app)
                    merchantRegister(this._app)
                    inventoryRegister(this._app)
                    pmRegister(this._app)
                    
                    resolve(true)

                })
            } catch (error) {
                console.log(error)
                reject(false)
            }
        })
    }
}