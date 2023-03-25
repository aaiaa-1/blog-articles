const express       = require('express')
const mongoose      = require('mongoose')
const app           = express()
const articleRouter = require ('./routes/articles') //accessing the article route
const parser        = require('body-parser')
const morgan        = require('morgan')
const cors        = require('cors')

//connect to the database
mongoose.connect('mongodb://localhost/blog')

 
app.use(express.urlencoded({extended: false})) /*this makes express able to access the different parameters 
                                                 from our article form inside of our article route */
                                        
app.use(parser.urlencoded({extended: false}))
app.use(parser.json())
app.use('/articles',articleRouter)  //using the articleRouter and we are telling it 
                                    //that we are using this route when we have '/articles' in the URL 
app.use(morgan("tiny"))
app.use(cors())
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