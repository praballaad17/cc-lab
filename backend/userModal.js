const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const UserSchema = new Schema({
    employeeId: {
        type: String,
    },
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    phone: {
        type: String,
    },
    dob: {
        type: String,
    }
});


const User = mongoose.model('User', UserSchema);
module.exports = User;
