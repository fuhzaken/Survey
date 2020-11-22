/*
Author: Kenneth Agustin
Team: Team Seven
Course: COMP229 - Fall 2020
Purpose: Team Project - Survey Site
*/ 

let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// Create a reference to the model
let Survey = require('../models/survey');

let surveyController = require('./survey');

module.exports.displaySurveyList = (req, res, next) => {
    Survey.find((err, surveyList) => {
        if(err)
        {
            return console.error(err);
        }
        else
        {
            res.render('survey/list', 
            {
                title: 'Survey List', 
                SurveyList: surveyList
            });
            //console.log(SurveyList);
        }
    });
};

module.exports.displayAddPage = (req, res, next) => {
    res.render('survey/add', 
    {
        title: 'Add Survey'
    });
};

module.exports.processAddPage = (req, res, next) => {
    let newSurvey = Survey({
        "Name": req.body.Name,
        "Description": req.body.Description,
        "Published": req.body.Published,
        "Start": req.body.Start,
        "End": req.body.End
    });

    Survey.create(newSurvey, (err, Survey) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // Refresh the Survey List
            res.redirect('/survey-list');
        }

    });
};

module.exports.displayEditPage = (req, res, next) => {
    let id = req.params.id;

    // Find the object to edit by its id
    Survey.findById(id, (err, surveyToEdit) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // Show the edit page
            res.render('survey/edit', 
            {
                title: 'Edit Survey',
                survey: surveyToEdit
            })
        }
    })
};

module.exports.processEditPage = (req, res, next) => {
    let id = req.params.id;

    let updateSurvey = Survey({
        "_id": id,
        "Name": req.body.Name,
        "Description": req.body.Description,
        "Published": req.body.Published,
        "Start": req.body.Start,
        "End": req.body.End
    })

    Survey.updateOne({_id: id}, updateSurvey, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // Refresh the Survey List
            res.redirect('/survey-list');
        }
    });
};

module.exports.performDelete = (req, res, next) => {
    let id = req.params.id;

    Survey.remove({_id: id}, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // Refresh the Survey List
            res.redirect('/survey-list');
        }
    });
};