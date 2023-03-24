const express       = require('express')
const app           = express()
const articleRouter = require ('./routes/articles') //accessing the article route

app.use('/articles',articleRouter)  //using the articleRouter and we are telling it 
                                    //that we are using this route when we have '/articles' in the URL
//setting up our view engine 
app.set('view engine','ejs')

app.get('/', (req, res) => {
    const articles = [{
        title:'Test Article Title',
        createdAt: new Date(),
        description : 'Test Article Description'
    },
    {
        title:'Test Article Title 2',
        createdAt: new Date(),
        description : 'Test Article Description 2'
    }]
    res.render('articles/index' ,{articles: articles})
})

app.listen (5100)