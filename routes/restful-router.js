const express = require('express');
const router = express.Router();

function restfulRouter(controller) {

    router.get('/', function (req, res) {
        controller.find(req.query)
            .then(models => res.json(models))
            .catch(err => res.status(500).json({error: err}));
    });


//POST
    router.post('/', function (req, res) {
        controller.create(req.body)
            .then(m => res.json(m))
            .catch(err => res.status(500).json({error: err}))
    });

    router.get('/:id', function (req, res) {
        controller.findById(req.params.id)
            .then(m => res.json(m))
            .catch(err => res.status(500).json({error: err}));
    });

// DELETE
    router.delete('/:id', function (req, res) {
        controller.removeById(req.params.id)
            .then(m => res.status(204).json('OK'))  //code 204 no content
            .catch(err => res.status(500).json({error: err}))
    });


// PATCH
// PUT /lists/:id/pin
// DELETE /lists/:id/pin
    router.patch('/:id', async function (req, res) {
        controller.updateById(req.params.id, req.body)
            .then(m => res.json(m))
            .catch(err => res.status(500).json({error: err}));

    });
    return router;
}

module.exports = restfulRouter;