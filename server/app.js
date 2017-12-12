const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/../client'));

app.get('/employee_availabilities', (req, res) => {
  res.json(req.employeeAvailabilities);
});

app.get('/schedule_dates', (req, res) => {
  res.json({apple: 1});
});

app.patch('/employee_availability', (req, res) => {
  res.json(req.empoloyeeAvailabilities);
});

app.post('/needed_employees', (req, res) => {
  res.json(req.scheduleTemplate);
});

module.exports = app;