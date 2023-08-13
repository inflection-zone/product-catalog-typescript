import express from "express";
import { productdiscount } from "../entity/productdiscount";
import { AppDataSource } from "../data-source";



export class productdiscountService {
    constructor() { }
    getBrand = async () => {
        const response = await AppDataSource.manager.find(productdiscount);
        return response;
    }

    getByIdBrand = async (id: string) => {
        const response = await AppDataSource.manager.findOne(productdiscount, { 
            where:
            {
                id:id
            }
        });
        return productdiscountMapper.toDto(response);
    }

    createBrand = async (req: express.Request) => {
        const cust = new productdiscount();
        
        productdiscount.prodcutid = req.body.prodcutid;
        productdiscount.merchantid = req.body.merchantid;
        productdiscount.discounttype = req.body.discounttype;
        productdiscount.discount = req.body.discount;
        productdiscount.discountforvolume = req.body.discountforvolume;
       
        const response =await AppDataSource.manager.save(productdiscount);
        return customerMapper.toDto(response);
    }

    updateBrand = async (req: express.Request) => {
        const id = req.params.id;
        const cust = await AppDataSource.manager.findOne(productdiscountr, {
            where:
            {
                id:id
            }
        }) ;
        productdiscount.prodcutid = req.body.prodcutid;
        productdiscount.merchantid = req.body.merchantid;
        productdiscount.discounttype = req.body.discounttype;
        productdiscount.discount = req.body.discount;
        productdiscount.discountforvolume = req.body.discountforvolume;
        const response =await AppDataSource.manager.save(productdiscount);
        return productdiscountMapper.toDto(response);
    }

    deleteBrand = async (req: express.Request) => {
        const id = req.params.id;
        const brand = await AppDataSource.manager.findOne(productdiscount,{
            where:
            {
                id:id
            }
        });
        const response = await AppDataSource.manager.remove(brand);
        return customerMapper.toDto(response);
    }
}

