import Toast from 'toaster-js';
import Event, { remove, findOne, find } from '../models/event.model';


export const showEvents = showEvents;
export const showSingle = showSingle;
export const seedDatabase = seedDatabase;
export const createEvent = createEvent;
export const saveEvent = saveEvent;


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

    remove({}, () => {
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
    findOne({ slug: req.params.slug }, (err, event) => {
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
    find({}, (err, events) => {
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
            res.status(303).send(new toast("Something went wrong"));
        }
        else {
            res.send(new toast("Event added successfully!"));
        }

        res.redirect('/events');
    });

}

