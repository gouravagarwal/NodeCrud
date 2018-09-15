module.exports = {
    
    //show all events
    showEvents: (req, res) => {

        //create dummy data
        const events =[
            { name:'Hockey', slug:'hockey' , description:'Team Game with 11 players' },
            { name:'Kabaddi', slug:'kabaddi' , description:'Team Game with 12 players' },
            { name:'VolleyBall', slug:'volleyball' , description:'Team Game with 6 players' }
        ]


        //return view with data
        res.render('pages/events', {events: events});
    },


    //show single event
    showSingle: (req, res) => {
        let event;

        if(req.params.slug === 'hockey')
            event = {name : 'Hockey', slug: 'hockey', description: 'Team Game with 11 players' };

        else if(req.params.slug === 'kabaddi')
            event = {name:'Kabaddi', slug:'kabaddi' , description:'Team Game with 12 players' };

        else if(req.params.slug === 'volleyball')
            event = {name:'VolleyBall', slug:'volleyball' , description:'Team Game with 6 players' };

        else
            event = {name : 'Invalid Input', slug: 'hockey', description: 'You have provided an invalid input' };



        res.render('pages/single',{event: event});
    }
   
};