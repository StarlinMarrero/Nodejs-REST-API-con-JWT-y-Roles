import {Router} from 'express'
import * as AccountCtrl from '../controllers/account.controller';


const router = Router();


router.get("/list", AccountCtrl.list);


export default router;