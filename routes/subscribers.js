const express = require("express");
const router = express.Router();

//Route for Getting all Subscribers
router.get('/',(req,res)=>{
    res.send("hello world"); //testing with rest client extension
});

//Route getting One
router.get('/:id',(req,res)=>{
    res.send(req.params.id);
});

//Route for creating One
router.post('/',(req,res)=>{
    
});

//Route for updating one
//put updates all the information, patch updates the things you want to change
router.patch('/:id',(req,res)=>{
    
});

//Route for deleting one.
router.delete('/:id',(req,res)=>{
    
});

module.exports = router;