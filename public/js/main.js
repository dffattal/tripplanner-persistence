'use strict';
/* global $ tripModule */

$.get('/api/days')
.then(function (results) {
  results.forEach(function (data) {
    dayModule.create(data)
  })
})

$(tripModule.load);
