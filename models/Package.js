const mongoose = require("mongoose");

const packageSchema = new mongoose.Schema({
    packageName: {
        type: String,
        required: true
    },
    destination: {
        type: String,
        required: true
    },
    duration: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("Package", packageSchema);