var express = require('express')
var app = express()

app.set('port', (process.env.PORT || 8081))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  response.send(`
    <h1>Node.js Sample Application, Version #01</h1>
    <p>Deployed on ECS Fargate with Github Actions</p>
    <p>Welcome to Application!</p>
  `);
});


app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
