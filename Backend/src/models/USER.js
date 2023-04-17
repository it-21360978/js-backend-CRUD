const mongoose = require('mongoose');

const USERSCHEME= mongoose.Schema;

const UserSchema = new USERSCHEME({

    name:{
        type: String,
        required:true,

    },

    gender:{

        type: String,
        required:true

    },

    email:{
        type: String,
        required:true

    }



})

const User = mongoose.model('user',UserSchema);

module.exports = User;