
//import dependencies
const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');


//initialise express app
const app = express();
port = process.env.PORT || 8080


//configure the application
//tell express where to look for static assets
app.use(express.static(__dirname + '/public'));

//set ejs as our templating engine
app.set('view engine', 'ejs');
app.use(expressLayouts);


//connect to the database
//mongoose.connect('mongodb://gourav:Passw0rd@ds141870.mlab.com:41870/asiangames', { useNewUrlParser: true });

mongoose.connect('mongodb://@ds141870.mlab.com:41870/asiangames',{
    auth:{
        user:'gourav',
        password: 'Passw0rd'
    },
    useNewUrlParser: true
})


//set routes
app.use(require('./routes/route'));


//start the server
app.listen(port, () => {
    console.log(`App listening on http://localhost:${port}`);
});