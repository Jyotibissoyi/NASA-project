const mongoose = require('mongoose');


const NASAdataSchema = new mongoose.Schema({

    date: {
        type: String
    },

    explanation: {
        type: String
    },

    media_type: {
        type: String
    },
    service_version: {
        type: String
    },
    title: {
        type: String
    },
    url: {
        type: String
    }


}, { timestamps: true });

module.exports = mongoose.model('NASAdata', NASAdataSchema)