
//create a new express router
const express = require('express');
const router = express.Router();

//import controllers
const mainController = require('../controllers/main.controller');
const nameController = require('../controllers/name.controller');
const eventsController = require('../controllers/events.controller');

//export the route
module.exports = router;

//define routes
//main route
router.get('/', mainController.showMain);

//name route
router.get('/name', nameController.showNamePage);

//all event route
router.get('/events', eventsController.showEvents);

//single event route
router.get('/events/:slug', eventsController.showSingle);

