const express = require('express');
const app = express();
const rp = require('request-promise');
const { query } = require('express');

app.set("view engine", "ejs");


app.get("/", function(req,res){
    res.render("search");
})

app.get("/results", function(req,res){

    //Getting the data from the form
    var query = req.query.search;
    var url = 'http://www.omdbapi.com/?apikey=thewdb&s=' + query;
    //Linking to API and requesting data
    rp(url)

    .then(function(body){
        var data = JSON.parse(body);
        res.render("results", {data: data});
    })
    
    .catch(function(err){
        console.log('ERROR', err);
    });



});











app.listen(3000, function(){
    console.log("Movie app has started!");
});