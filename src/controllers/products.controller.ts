import {RequestHandler} from 'express'
import { getRepository } from 'typeorm';
import { Product } from '../models/Product';


export const list: RequestHandler = async (req, res) => {

    const lista = await getRepository(Product).find();
    res.json({lista});


}
export const create: RequestHandler = async (req, res) => {
    console.log(req.body);
    
    const newProduct = getRepository(Product).create(req.body);
    const result = await getRepository(Product).save(newProduct);

    res.json(result);
}