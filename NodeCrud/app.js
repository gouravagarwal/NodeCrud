
//import dependencies
const express = require('express');
const expressLayouts = require('express-ejs-layouts');


//initialise express app
const app = express();
port = process.env.PORT || 8080


//configure the application
//tell express where to look for static assets
app.use(express.static(__dirname + '/public'));

//set ejs as our templating engine
app.set('view engine', 'ejs');
app.use(expressLayouts);

//set routes
app.use(require('./routes/route'));


//start the server
app.listen(port, () => {
    console.log(`App listening on http://localhost:${port}`);
});