
const Event = require('../models/event.model');


module.exports = {
    showEvents: showEvents,
    showSingle: showSingle,
    seedDatabase: seedDatabase,
    createEvent: createEvent,
    saveEvent: saveEvent,
    updateEvent: updateEvent,
    deleteEvent: deleteEvent
};


/**
 * Seed the database
 */
function seedDatabase(req, res) {
    //create dummy data
    const events = [
        { name: 'Hockey', slug: 'hockey', description: 'Team Game with 11 players' },
        { name: 'Kabaddi', slug: 'kabaddi', description: 'Team Game with 12 players' },
        { name: 'VolleyBall', slug: 'volleyball', description: 'Team Game with 6 players' }
    ]

    Event.remove({}, () => {
        for (event of events) {
            var newEvent = new Event(event);
            newEvent.save();
        }
    });

    res.send('Database Seeded');
}

/**
 * Show a single event
 */
function showSingle(req, res) {
    Event.findOne({ slug: req.params.slug }, (err, event) => {
        if (event === null) {
            res.status(404).send('You have provided an invalid input');
        }
        res.render('pages/single', { event: event });
    });
}

/** 
 * Show all the events
 */
function showEvents(req, res) {
    Event.find({}, (err, events) => {
        //return view with data
        res.render('pages/events', { events: events });
    });
}


/**
 * Creates a new event in the database 
 */
function createEvent(req, res) {
    res.render('pages/event-create');
}

/**
 * Saves new event in the database
 */
function saveEvent(req, res) {

    let event = new Event({
        name: req.body.name,
        slug: req.body.slug,
        description: req.body.description
    });

    event.save((err) => {
        if (err) {
            res.status(303).send('Something went wrong');
        }
        else {
            // res.flash('success', 'Event added successfully!');
            res.redirect('/events');
        }
    });

}

/**
 * Update the event
 */
function updateEvent(req, res) {
    //find the event

    //if not found, return 404
    Event.findOne({ slug: req.params.slug }, (err, event) => {
        if (event === null) {
            res.status(404).send('Invalid request');
        }

        res.render()
    });

    //update the event

}

/**
 * Delete an event
 */
function deleteEvent(req, res) {
    Event.findOneAndRemove({ slug: req.params.slug }, (err) => {
        if (err) return res.status(400).send('Bad request');
        else res.redirect('/events');
    });
}
