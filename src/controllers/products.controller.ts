import {RequestHandler} from 'express'
import { getRepository } from 'typeorm';
import { Product } from '../models/Product';


export const list: RequestHandler = (req, res) => {

    res.json('lista de productos');


}
export const create: RequestHandler = async (req, res) => {
    console.log(req.body);
    
    const newProduct = getRepository(Product).create(req.body);
    const result = await getRepository(Product).save(newProduct);

    res.json(result);

}