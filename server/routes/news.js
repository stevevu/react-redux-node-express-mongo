const express = require('express');
const router = express.Router();
const newsController = require('../controllers/NewsController');

const fakeNews = [{
    id: '1',
    title: 'Mad owl chases car',
    teaser: 'Mad owl seen tormenting drivers in Morecambe',
    body: 'This is some body text regarding the news story of the mad owl tormenting drivers in Morecambe'
}, {
    id: '2',
    title: 'Owl stowaway',
    teaser: 'Despicable owl impersonates passenger to board flight to Luton',
    body: 'This is some body text regarding the news story of the owl making its way onto a domestic flight to luton'
}, {
    id: '3',
    title: 'Owl steals pork pie',
    teaser: 'This morning a rogue owl stole a pork pie from a shop in Swindon.',
    body: 'This is some body text regarding the news story of the owl stealing a pork pie from a shop in swindon'
}];

router.get('/', (req,res,next) => {
    newsController.find(req.query, (err, results) => {
        if (err) {
            console.log("ERROR: news route find():", err);
            res.status(500).json({
                success: 0,
                error: err
            });
        }
        else {
            res.status(200).json({
                success: 1,
                data: results
            });
        }
        return;
    });
})

router.get('/:id', (req,res,next) => {
    const id = req.params.id;
    newsController.findById(id, (err, results) => {
        if (err) {
            console.log("ERROR: news route find by id", err);
            res.status(500).json({
                success: 0,
                error: err
            });
        }
        else {
            res.status(200).json({
                success: 1,
                data: results
            });
        }
        return;
    });
})

router.post('/', (req, res, next) => {
    newsController.create(req.body, (err, result) => {
        if (err) {
            console.log("ERROR: news route create", err);
            res.status(500).json({
                success: 0,
                error: err
            })
        }
        else {
            res.status(200).json({
                success:1,
                data: result
            });
        }
        return;
    })
})

module.exports = router;