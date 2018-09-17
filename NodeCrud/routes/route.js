
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

//seed database
router.get('/events/seed',eventsController.seedDatabase);

//create new event 
router.get('/events/create', eventsController.createEvent);

//save new event in the database
router.post('/events/create', eventsController.saveEvent);

//single event route
router.get('/events/:slug', eventsController.showSingle);




