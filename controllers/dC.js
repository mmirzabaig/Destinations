const express = require('express');
const router = express.Router();

const Destinations = require('../models/destinations');

router.get('/', (req, res) => {
  Destinations.find({}, (err, destinationFound) => {
    res.render('index.ejs', {
      destinations: destinationFound
    });
  });
});

router.get('/new', (req, res) => {
  res.render('new.ejs');
});

router.post('/', (req, res) => {
  if (req.body.fly === 'on') {
    req.body.fly = true;
  } else {
    req.body.fly = false;
  }
  Destinations.create(req.body, (err, destinationCreated) => {
      if (err) {
        console.log(err);
      } else {
        console.log(destinationCreated);
        res.redirect('/destinations');
      }
  });
});

router.get('/:id', (req, res) => {
  Destinations.findById(req.params.id, (err, destinationFound) => {
    res.render('show.ejs',
    {
      destination: destinationFound
    });
  });
});

router.delete('/:id', (req, res) => {
  console.log(req.params.id, ' body to be deleted');
  Destinations.findByIdAndRemove(req.params.id, (err, destinationRemoved) => {
    res.redirect('/destinations');
  });
});



router.get('/:id/edit', (req, res) => {
    Destinations.findById(req.params.id, (err, destinationFound) => {
      res.render('edit.ejs', {
        destination: destinationFound
      });
    });
});
router.put('/:id', (req, res) => {
  Destinations.findByIdAndUpdate(req.params.id, req.body, (err, destinationFound) => {
    res.redirect('/destinations');
  });
});


module.exports = router;
