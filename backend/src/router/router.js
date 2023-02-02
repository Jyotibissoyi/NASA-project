const express =require("express")
const router =express.Router();
//================================================Importing modules=============================================>

const { getDATA  } = require("../controller/nasaDataControlller")





//===================================================API=========================================================>

router.get('/getData', getDATA)



module.exports =router