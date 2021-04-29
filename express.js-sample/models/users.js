const mongoose = require('mongoose');
//Define a schema
const Schema = mongoose.Schema;
const UserSchema = new Schema({
    name: {
        type: String,
        trim: true,  
        required: true,
    },
    telp: {
        type: String,
        trim: true,
        required: true
    },
});

module.exports = mongoose.model('users', UserSchema);