const express = require('express');
const router = express.Router();


const restfulRouter = require('./restful-router');

const controllers = require('../controllers');

for(let path in controllers){
    router.use(`/${path}`, restfulRouter(controllers[path]))
}


module.exports = router;