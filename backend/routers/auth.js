const express = require("express")
const router = express.Router()
const { body, validationResult } = require('express-validator');

const {signup , login , getuser , updateuser} = require("../controllers/auth.js");
const fetchuser  = require("../middlewares/fetchuser.js") ; 


router.post("/signup", [
    body('name', 'Enter a valid name').isLength({ min: 2 }),
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Enter a valid password').isLength({ min: 2 }),
] , signup );


router.post("/login" , [    
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Enter a valid password').isLength({ min: 2 }) 
] , login); 


router.get("/getuser" , fetchuser , getuser ); 


router.put("/updateuser" , fetchuser, updateuser) ; 




module.exports = router; 