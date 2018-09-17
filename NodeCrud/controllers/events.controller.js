const Event = require('../models/event.model');

module.exports = {
    showEvents: showEvents,
    showSingle: showSingle,
    seedDatabase: seedDatabase
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
    Event.findOne({slug: req.params.slug}, (err,event) => {
        console.log(event);
        if(event === null){
            event = { name: 'Invalid Input', slug: 'invalid', description: 'You have provided an invalid input' };
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