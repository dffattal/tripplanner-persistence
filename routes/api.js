var db = require('../models');
var Hotel = db.model('hotel');
var Restaurant = db.model('restaurant');
var Activity = db.model('activity');
var router = require('express').Router();
var Day = db.model('day');

router.get('/hotels', function (req, res, next) {
  Hotel.findAll()
  .then(function (allHotels) {
    res.json(allHotels)
  })
  .catch(next);
});

router.get('/restaurants', function (req, res, next) {
  Restaurant.findAll()
  .then(function (allRestaurants) {
    res.json(allRestaurants)
  })
  .catch(next);
});

router.get('/activities', function (req, res, next) {
  Activity.findAll()
  .then(function (allActivities) {
    res.json(allActivities)
  })
  .catch(next);
});

//Getting all days
router.get('/days', function (req, res, next) {
  Day.findOrCreate({
    where: {
      number: 1
    }
  })
  .then(function (day) {
    Day.findAll()
    .then(function (days) {
      if (days.length)
      res.json(days)
    })
  })
  .catch(next);
});

//Creating a new day
router.post('/days', function (req, res, next) {
  Day.create({
    number: Number(req.body.number)
  })
  .then(function (day) {
    res.sendStatus(201)
  })
  .catch(next);
});


//Getting and deleting days by ID
router.get('/days/:id', function (req, res, next) {
  Activity.findAll()
  .then(function (allActivities) {
    res.json(allActivities)
  })
  .catch(next);
});

router.delete('/days/:id', function (req, res, next) {
  Activity.findAll()
  .then(function (allActivities) {
    res.json(allActivities)
  })
  .catch(next);
});

//Updating specific attractions for a day instance
router.put('/days/:id/hotel', function (req, res, next) {
  Activity.findAll()
  .then(function (allActivities) {
    res.json(allActivities)
  })
  .catch(next);
});

router.put('/days/:id/restaurant', function (req, res, next) {
  Activity.findAll()
  .then(function (allActivities) {
    res.json(allActivities)
  })
  .catch(next);
});

router.put('/days/:id/activity', function (req, res, next) {
  Activity.findAll()
  .then(function (allActivities) {
    res.json(allActivities)
  })
  .catch(next);
});

//deleting specific attractions for a day instance
router.delete('/days/:id/hotel', function (req, res, next) {
  Activity.findAll()
  .then(function (allActivities) {
    res.json(allActivities)
  })
  .catch(next);
});

router.delete('/days/:id/restaurant', function (req, res, next) {
  Activity.findAll()
  .then(function (allActivities) {
    res.json(allActivities)
  })
  .catch(next);
});

router.delete('/days/:id/activity', function (req, res, next) {
  Activity.findAll()
  .then(function (allActivities) {
    res.json(allActivities)
  })
  .catch(next);
});

module.exports = router;
