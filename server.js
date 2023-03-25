const express       = require('express')
const mongoose      = require('mongoose')
const app           = express()
const articleRouter = require ('./routes/articles') //accessing the article route
const parser        = require('body-parser')
const morgan        = require('morgan')
const cors        = require('cors')
const Article =require ('./models/article')

//connect to the database
mongoose.connect('mongodb://localhost/blog')

 
app.use(express.urlencoded({extended: false})) /*this makes express able to access the different parameters 
                                                 from our article form inside of our article route */
                                        
app.use(parser.urlencoded({extended: false}))
app.use(parser.json())

app.use(morgan("tiny"))
app.use(cors())
//setting up our view engine 
app.set('view engine','ejs')

app.get('/',  async (req, res) => {
    const articles = await Article.find().sort({createdAt: 'desc'}) //showing all articles
    res.render('articles/index' ,{articles: articles})
})


app.use('/articles',articleRouter)  //using the articleRouter and we are telling it 
                                    //that we are using this route when we have '/articles' in the URL 
app.listen (5100)