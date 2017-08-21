var express = require('express');
var app = express();
var courses = require('./data/courses_data');

app.set('port', (process.env.PORT || 5000));

app.get('/courses', function(request, response) {
  response.json(courses);
});

app.get('/activities', function(request, response) {
  response.json([]);
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
