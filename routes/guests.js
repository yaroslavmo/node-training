const express = require('express');
const router = express.Router();

const Guest = require('../models/Guest');


router.get('/guests', function (req, res) {
    Guest.find()
        .then(guests => res.json(guests))
        .catch(err => res.status(500).json({error: err}));
});

router.get('/guests/:id', function (req, res) {
    Guest.findById(req.params.id)
        .then(m => res.json(m))
        .catch(err => res.status(500).json({error: err}));
});

// DELETE
router.delete('/guests/:id', function (req, res) {
    Guest.findOneAndRemove(req.params.id)
        .then(m => res.status(204).json('OK'))  //code 204 no content
        .catch(err => res.status(500).json({error: err}))
});


// PATCH
// PUT /lists/:id/pin
// DELETE /lists/:id/pin
router.patch('/guests/:id', async function (req, res) {
    Guest.findByIdAndUpdate(req.params.id, req.body, {new:true})
        .then(m => res.json(m))
        .catch(err => res.status(500).json({error: err}));

});

//POST
router.post('/guests', function (req, res) {
    Guest.create(req.body)
        .then(m => res.json(m))
        .catch(err => res.status(500).json({error: err}))
});


module.exports = router;