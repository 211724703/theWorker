const mongoose = require('mongoose')

const AdminSchema = mongoose.Schema({

    AdminID:{
        type:String,
        require:true,
    },
    nameaAdmin:{
        type:String,
        require:true,
    },
    passwordAdmin:{
        type:String,
        default: "admin2765",
        require:true,
    },
    emailaAdmin:{
        type:String,
        default: "admin@workers.com",
        require:true,
    },
    listUser:[{
        type:mongoose.Schema.Types.ObjectId,ref:'user'
    }]

})


 module.exportsm = mongoose.model('admin',AdminSchema)


