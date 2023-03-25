const mongoose =require('mongoose')
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
    markdown:{
        type: String,
        required:true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Article' , articleSchema)

//so now we have a table in our database called 'Article' that 
//has the schema 'articleSchema'