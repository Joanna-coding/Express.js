const express = require("express");
const app = express();
app.use(express.static(__dirname + "/static"));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');


app.get('/cats', (request, response) => {
   //response.send("Hello Express");

    response.render('cats')

});

app.get('/cuddle', (request, response) => {
    var data_arr={
        image: "../cat1.jpg",
        name: "cuddler",
        age:4,
        food:"pet food",
        hobby:["singing", "talking"]
    };
 
     response.render('cuddle', {data: data_arr});
 
 });

 app.get('/little', (request, response) => {
    var data={
        image: "../cat2.jpg",
        name: "little",
        age:4,
        food:"pet food",
        hobby:["singing", "talking"]
    };
 
     response.render('little', data);
 
 });

 app.get('/white', (request, response) => {
    var data={
        image: "../cat3.jpg",
        name: "white",
        age:4,
        food:"pet food",
        hobby:["singing", "talking"]
    };
 
     response.render('white', data);
 
 });


app.listen(5000, () => console.log("listening on port 5000"));