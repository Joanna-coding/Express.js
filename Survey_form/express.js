const express = require("express");
const app = express();
app.use(express.static(__dirname + "../static"));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
var session = require('express-session');
app.use(session({
    secret: 'keyboardkitteh',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
  }))

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
    extended: false
 }));


app.get('/', (request, response) => {
    
    response.render("index");
 
 });

 app.post('/results', (request, response) => {
    request.session.body = request.body;
    
    response.redirect("/result");
 });

 

 app.get('/result', (request, response) => {
    
    response.render("result", { body: request.session.body });
 
 });

app.listen(5000, () => console.log("listening on port 5000"));