// We will need our mongoose library
const mongoose = require(`mongoose`);

// Your schema
const MetaSchema = new mongoose.Schema({
    alias: {
        type: String,
        required: true
    },
    fullName: {
        type: String,
        required: true
    },
    affiliation: {
        type: String,
        required: false
    },
    metaType: {
        type: String,
        enum: ['SUPERHERO', 'VILLIAN', 'ANTI-HERO'],
        default: 'SELECT'
    }
} );

// Exporting our resource model
module.exports = mongoose.model('Meta', MetaSchema);