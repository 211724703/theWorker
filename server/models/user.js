const mongoose = require('mongoose')

const userSchema = mongoose.Schema({

    userId:{
        type:String,
        require:true
    },
    fName: {
        type: String,
        require: true
    },
    lName: {
        type: String,
        require: true
    },
    password: {
        type: String,
        minlength: 8,
        require: true
    },
    email:{
        type:String,
        require: true
    },

    status:{
        type:String,
        default: "moamad",
    }
  
})

module.exports = mongoose.model('user', userSchema)      