var express = require('express')
var bodyParser = require('body-parser');
var app = express()

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/user', function (req, res) {
  if (req.headers.authorization !== 'Bearer YWNjZXNzX3Rva2Vu') {
    res.send(401, { error: 'Not authorized'});
  }

  res.send({ firstName: 'Anurag', lastName: 'Simgeker' });
})

app.post('/api/user/login', function (req, res) {
  var username = req.body.username
    password = req.body.password;

  if (username !== 'anurag') res.send(400, { error: 'User not found'});
  if (password !== 'password') res.send(401, { error: 'Wrong password'});

  res.send({ accessToken: 'YWNjZXNzX3Rva2Vu' });
})

app.listen(8080, function () {
  console.log('Example app listening on port 8080!')
})
