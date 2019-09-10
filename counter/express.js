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




app.get('/', (request, response) => {
    if( request.session.count){
        request.session.count ++;
        
    }else{
        request.session.count = 1;
    }
    response.render("index", {count:request.session.count});
 
 });

 app.get('/add', (request, response) => {
     request.session.count +=1;
    
    response.redirect("/");
 });

 app.get('/reset',(request, response)=>{
     request.session.count = 1;
     response.redirect("/");
 })

app.listen(5000, () => console.log("listening on port 5000"));