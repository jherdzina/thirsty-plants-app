const mongoose = require("mongoose");

const plantSchema = new mongoose.Schema({
    plantName: { type: String, required: true },
    imageURL: { type: String },
    room: { type: String },
    wateredLast: { },
    waterSchedule: { }
})

module.exports = mongoose.model(plantSchema)
