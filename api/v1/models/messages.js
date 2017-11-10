"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const messageModel = new Schema(
    {
        id:{
            type:Number,
            required: true
        },
        author:{
            type:String,
            required: true
        },
        text:{
            type:String,
            required: true
        }
    }
);

module.exports = mongoose.model('message', messageModel);