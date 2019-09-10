const express = require("express");
const app = express();
app.use(express.static(__dirname + "/static"));

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
    if(!request.session.number ){
        request.session.number = Math.ceil(Math.random()*100)+1;
    }

    if(!request.session.status ){
        request.session.status = " ";
    }
    response.render("index",{guess:request.session.status});
 
 });

 app.post('/process', (request, response) => {
    if(request.session.number > request.body.guess){
        request.session.status = "low";
        console.log("the higher number is:", request.session.number)
    }
    else if(request.session.number < request.body.guess){
        request.session.status = "high";
        console.log("the lower number is:", request.session.number)
    }
    else{
        request.session.status = "correct";
        console.log("the lower number is:", request.session.number)
    }
    response.redirect("/");
 
 });

 app.get('/reset', function(request, reaponse){
    request.session.destroy();
    reaponse.redirect('/')
})



app.listen(5000, () => console.log("listening on port 5000"));