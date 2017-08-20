var express = require('express');
var app = express();
var courses = require('./data/courses_data');

app.set('port', (process.env.PORT || 5000));

app.get('/', function(request, response) {
  response.json(courses);
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
