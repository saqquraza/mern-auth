import express from 'express'
import {test} from '../controllers/user.controller.js'

const router = express.Router();

// router.get('/',(req , res)=>{
//     res.json({
//         message:"It is get Api",
//     });
// });

router.get('/',test)

export default router;