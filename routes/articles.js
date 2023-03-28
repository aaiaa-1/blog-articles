const express = require('express')
const router= express.Router()
const Article =require ('./../models/article')
const functions = require('../function/article')
router.get ('/new',(req,res)=>{
    res.render('articles/new' , {article : new Article() })
})

router.get('/:id',async(req, res)=>{
    const article = await Article.findById(req.params.id)
    if (article == null) res.redirect('/')
    res.render ('articles/show' , {article: article})
})

router.route('/').post(functions.addArticle);

module.exports = router 