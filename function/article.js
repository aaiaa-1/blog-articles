const article= require('../models/article');

    const addArticle =async (req,res)=> {
        try{
            const newArticle =await new article({
                title: req.body.title,
                description: req.body.description,
                markdown: req.body.markdown
            });
            const dataSave =  await newArticle.save();
            res.send(dataSave).status(200);

        }catch(err){
            res.status(500).send(err);
        }
    }

module.exports = {addArticle}