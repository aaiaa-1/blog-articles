const mongoose =require('mongoose')
/*A slug is the part of a URL that identifies a particular page 
    on a website in an easy-to-read form */
const marked = require('marked')
const slugify = require('slugify')

const articleSchema= new mongoose.Schema({
    // here we are passing a set of options of the different  
    // columns that our article has
    title:{
        type:String,
        required:true
    },
    description:{
        type:String
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    slug:{
        type: String,
        required:true,
        unique:true
    }
})

//create our slug from the title
articleSchema.pre('validate', function(next){
    if(this.title){
        this.slug = slugify (this.title , {lower: true, strict: true})
    }
    next()
})

module.exports = mongoose.model('Article' , articleSchema)

//so now we have a table in our database called 'Article' that 
//has the schema 'articleSchema'