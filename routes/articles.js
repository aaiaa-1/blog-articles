const express = require('express')
const router= express.Router()
const Article =require ('./../models/article')
const functions = require('../function/article')
router.get ('/new',(req,res)=>{
    res.render('articles/new' , {article : new Article()})
})

router.get('/:id',(req, res)=>{
    res.send(req.params.id)
})

router.route('/').post(functions.addArticle);

module.exports = router 