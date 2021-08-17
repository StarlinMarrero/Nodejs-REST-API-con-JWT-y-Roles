import {RequestHandler} from 'express'

export const list: RequestHandler = (req, res) => {

    res.json("Lista de usuarios");


}