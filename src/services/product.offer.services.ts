import express from "express";
import { ProductOffer } from "../database/models/product.offer.model";
import { AppDataSource } from "../database/data.source";
import { ProductOfferMapper } from "../database/mappers/product.offer.mapper";
export class productOfferService {
    constructor() { }

    getProductOffer = async () => {
        const response = await AppDataSource.manager.find(ProductOffer);
        return response;
    }

    getProductOfferById = async (id: string) => {
        const response = await AppDataSource.manager.findOne(ProductOffer, {
            where: {
                id: id
            }
        });
        return ProductOfferMapper.toDto(response);
    }

    createProductOffer = async (req: express.Request) => {
        const productOffer = new ProductOffer();
        productOffer.productId = req.body.productId;
        productOffer.title = req.body.title;
        productOffer.details = req.body.details;

        const response = await AppDataSource.manager.save(productOffer);
        return ProductOfferMapper.toDto(response);
    }

    updateProductOffer = async (req: express.Request) => {
        const id = req.params.id;
        const productOffer = await AppDataSource.manager.findOne(ProductOffer, {
            where: {
                id: id
            }
        });

        if (!productOffer) {
            return null;
        }
        productOffer.productId = req.body.productId;
        productOffer.title = req.body.title;
        productOffer.details = req.body.details;

        const response = await AppDataSource.manager.save(productOffer);
        return ProductOfferMapper.toDto(response);
    }
    deleteProductOffer = async (req: express.Request) => {
        const id = req.params.id;
        const productOffer = await AppDataSource.manager.findOne(ProductOffer, {
            where: {
                id: id
            }
        });
        const response = await AppDataSource.manager.remove(productOffer);
        return ProductOfferMapper.toDto(response);
    }
}