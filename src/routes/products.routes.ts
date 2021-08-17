import Router from 'express'
import * as productsCtrl from '../controllers/products.controller'
const router = Router();

router.get('/list', productsCtrl.list);
router.post('/create', productsCtrl.create);




export default router;