const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

require('./db/db');

const destinationsController = require('./controllers/dC');

//middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));
//
app.use('/destinations', destinationsController);



app.listen(3000, () => {
  console.log('Your APP IS LIVE!');
})
