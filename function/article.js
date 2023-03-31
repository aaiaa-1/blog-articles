const { response } = require('express');
const article= require('../models/article');

    const saveArticleAndRedirect =(req,res) => {
        let articleEdit = req.article  
        articleEdit.title = req.body.title
        articleEdit.description = req.body.description
        try{
            const dataSave =  articleEdit.save()
            res.redirect('/')
        }catch(err){
            res.status(500).send(err);
            res.render(`articles/${path}`, {article: article} )
        }

    }

    const addArticle =async (req,res)=> {
        try{
            const newArticle =await new article({
                title: req.body.title,
                description: req.body.description,
            });
            const dataSave =  await newArticle.save()
            res.redirect('/')

        }catch(err){
            res.status(500).send(err);
            res.render(`articles/new`, {article: article} )
        }
    }

module.exports = {addArticle}