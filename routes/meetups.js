const express = require('express');
const router = express.Router();

const Meetup = require('../models/Meetup')


router.get('/meetups', function (req, res) {
    Meetup.find()
        .then(meetups => res.json(meetups))
        .catch(err => res.status(500).json({error: err}));
});

router.get('/meetups/:id', function (req, res) {
    Meetup.findById(req.params.id)
        .then(m => res.json(m))
        .catch(err => res.status(500).json({error: err}));
});

// DELETE
router.delete('/meetups/:id', function (req, res) {
    Meetup.findOneAndRemove(req.params.id)
        .then(m => res.status(204).json('OK'))  //code 204 no content
        .catch(err => res.status(500).json({error: err}))
});


// PATCH
// PUT /lists/:id/pin
// DELETE /lists/:id/pin
router.patch('/meetups/:id', async function (req, res) {
    Meetup.findByIdAndUpdate(req.params.id, req.body, {new:true})
        .then(m => res.json(m))
        .catch(err => res.status(500).json({error: err}));

});

//POST
router.post('/meetups', function (req, res) {
    Meetup.create(req.body)
        .then(m => res.json(m))
        .catch(err => res.status(500).json({error: err}))
});


module.exports = router;