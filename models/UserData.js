const mongoose = require("mongoose");

//Stores the scheme of the data were using so it can be stored in MongoDB
const UserDataSchema = new mongoose.Schema({
    id:{
        type: String,
        required: true
    },
    firstName:{
        type: String,
        required: true
    },
    lastName:{
        type: String,
        required: true
    },
    street:{
        type: String,
        required: true
    },
    city:{
        type: String,
        required: true
    },
    state:{
        type: String,
        required: true
    },
    postal:{
        type: String,
        required: true
    },
    country:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    phone:{
        type: String,
        required: true
    }  
});

module.exports = mongoose.model("UserData", UserDataSchema);
