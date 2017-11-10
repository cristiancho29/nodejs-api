"use strict";

const Message = require("./../models/messages");
const config = require("./../../../config");

exports.params = (req, res, next, id) => {
    Message.findById(id)
        .then( message => {
            if (message) {
                req.message = message;
                next();
            } else {
                res.json({
                    "message": "Message not found"
                });
            }
        })
        .catch( err => {
            next(new Error(err));
        });
};


exports.all = (req, res, next) => {
            Message.find()
            .then( messages => {
                res.json(messages);
            })
            .catch( err => {
                next(new Error(err));
            });      
            console.log("peticion")
};

exports.get = (req, res, next) => {
    const user = req.user;
    res.json(user);
};

exports.put = (req, res, next) => {
    
};

exports.delete = (req, res, next) => { 
};