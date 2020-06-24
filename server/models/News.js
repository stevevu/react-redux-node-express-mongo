const mongoose = require('mongoose');

const NewsSchema = mongoose.Schema({
    title: String,
    teaser: String,
    body: String,
    status: {
        type: Number,
        default: 1
    },
    create: {
        type: Date,
        required: true,
        default: Date()
    }
});

mongoose.model('News', NewsSchema);

module.exports = mongoose.model('News');