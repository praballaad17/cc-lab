const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const AuthSchema = new Schema({
    employeeId: {
        type: String,
    },
    password: {
        type: String,
    }
})

const Auth = mongoose.model('Auth', AuthSchema);
module.exports = Auth;