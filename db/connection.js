const express = require('express');
const mongoose = require('mongoose');

require('dotenv').config();


const url = process.env.MONGODB_URL;

const connection = async function () {
    try {
        await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log('Connected to MongoDB')
    } catch (error) {
        console.error('Error connecting to databse', error)
    }
}


module.exports = connection;