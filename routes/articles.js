const express = require('express')
const router= express.Router()
const functions = require('../function/article')
router.get ('/new',(req,res)=>{
    res.render('articles/new')
})

router.get('/:id',(req, res)=>{
    
})

router.route('/').post(functions.addArticle);

module.exports = router 