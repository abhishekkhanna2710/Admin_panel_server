const mongoose = require("mongoose");

const joinUsSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    work_email: {
        type: String,
        required: true
    },
    phone_number: {
        type: Number,
        required: true
    },
    company_name: {
        type: String,
        required: true
    },
    website_url: {
        type: String,
        required: true
    },
    job_title: {
        type: String,
        required: true
    },
    hear: {
        type: String,
        // required: true
    },
    we_help: {
        type: String,
        required: true
    }

})

const JoinUs = new mongoose.model('join_us', joinUsSchema);

module.exports = JoinUs