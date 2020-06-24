const News = require('../models/News');

module.exports = {
    find: function(params, callback) {
        News.find(params, '_id title teaser', (err, results) => {
            if (err) {
                callback(err, null);
            }
            else {
                callback(null, results);
            }
            return;
        })
    },

    findById: function (id, callback) {
        News.findById(id, (err, results) => {
            if (err) {
                callback(err, null);
            }
            else {
                callback (null, results)
            }
            return;
        });
    },

    create: function(params, callback) {
        News.create(params, (err, result) => {
            if (err) {
                callback(err, null);
            }
            else {
                callback(null, result);
            }
            return;
        })
    }
}