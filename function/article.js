const { response } = require('express');
const article= require('../models/article');

    const addArticle =async (req,res)=> {
        try{
            const newArticle =await new article({
                title: req.body.title,
                description: req.body.description,
                markdown: req.body.markdown
            });
            const dataSave =  await newArticle.save()
            res.redirect('/')

        }catch(err){
            res.status(500).send(err);
            //response.render('articles/new' , {article: dataSave})
            // ?????????????????????
        }
    }

module.exports = {addArticle}