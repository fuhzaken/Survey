/*
Author: Kenneth Agustin
Team: Team Seven
Course: COMP229 - Fall 2020
Purpose: Team Project - Survey Site
*/ 
let mongoose = require('mongoose');

// Create a model class, Schema
let surveyModel = mongoose.Schema({
    Surveyor: String,
    Name: String,
    Description: String,
    Published: String,
    Start: String,
    End: String,
    Questions: [
        // Stores an array of questions
       
    ]
},
{
    collection: "survey"
});

module.exports = mongoose.model('Survey', surveyModel);