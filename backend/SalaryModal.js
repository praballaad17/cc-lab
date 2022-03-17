const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const SalarySchema = new Schema({
    employeeId: {
        type: String,
    },
    jobRole: {
        type: String,
    },
    monthlySalary: {
        type: String,
    },
    yearlyBonus: {
        type: String,
    },

})

const Salary = mongoose.model('salary', SalarySchema);
module.exports = Salary;