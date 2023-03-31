const express = require('express')
const router= express.Router()
const Article =require ('./../models/article')
const functions = require('../function/article')
router.get ('/new',(req,res)=>{
    res.render('articles/new' , {article : new Article() })
})
router.get ('/edit/:id',async (req,res)=>{
    const article = await Article.findById(req.params.id)
    res.render('articles/edit' , {article : article})
})

router.get('/:slug',async(req, res)=>{
    const article = await Article.findOne({slug: req.params.slug}) //'findOne' because 'find' returns an array
    if (article == null) res.redirect('/')
    res.render ('articles/show' , {article: article})
})

router.route('/').post(functions.addArticle);
router.delete('/:id', async (req,res)=>{
    await Article.findByIdAndDelete(req.params.id)
    res.redirect('/')
})
/*to delete by clicking on the button 'delete' we have to call a 
library called method override because originally buttons only have
the method : POST/GET , while in this case we need a method : DELETE 
the library 'method-override' allow us to override the form's method
so we can do delete, patch or put instead of only GET and POST*/

router.put('/:id', async (req,res)=>{
    
})

module.exports = router 