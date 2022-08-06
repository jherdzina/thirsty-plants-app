const mongoose = require("mongoose");

const plantSchema = new mongoose.Schema({
    plantType: { type: String, required: true },
    plantName: { type: String },
    imageURL: { type: String },
    roomLocated: { type: String },
    wateredLast: { 
        type: Date,
        default: new Date()
    },
    waterSchedule: { type: String }
})

module.exports = mongoose.model(plantSchema)
