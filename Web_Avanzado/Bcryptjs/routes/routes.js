const express=require('express');
const router=express.Router();

const {registrarAdmin, login}=require('../controllers/constrollers');

router.post('/registrarAdmin',registrarAdmin);
router.post('/login',login);

module.exports=router;

