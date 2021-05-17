const path = require('path');
const express = require('express');
var exphbs  = require('express-handlebars');
const hbs=require('hbs');
const { request } = require('http');

const getlatlong = require("./utils/getlatlong");
const getweather = require("./utils/getweather");

const app = express();
const port = process.env.PORT || 3000;

//setting up path names
const publicpath = path.join(__dirname,'../public');
const viewspath=path.join(__dirname,"../templetes/views");
const partialpath=path.join(__dirname,"../templetes/partials");

//pointing handlebars defaults paths to our directories
app.set('view engine','hbs');
app.set("views",viewspath);
hbs.registerPartials(partialpath);

//pointing static default path to our directories
app.use(express.static(publicpath));


app.get("",(req, res) => {
    res.render('index', {
        pagename:'Weather Info',
    });
})

app.get("/about",(req,res) => {
    res.render('about',{
        pagename:"About Weather Info"
    });
})

app.get("/about/*",(req,res)=>{
    res.render("error",{
        pagename:"404 About not found",
        errormsg:"article not found under about"
    })
})

app.get("/weather",(req,res) => {
    if(!req.query.address){
        return res.send("Please provide an Address!!!");
    }

    getlatlong(req.query.address,(lat, long, inputcity) => {
        // console.log(lat);
        // console.log(long);
        // console.log(inputcity);
    
        getweather(lat, long, (temp) => {
            // console.log(temp);
            //console.log("The temperature of "+ inputcity + " is " + temp +" degree Celsius.")
            // console.log(lat);
            // console.log(long);
            res.send({
                inputcity: inputcity,
                temp : temp,
                lat : lat
            });

        })
    
    });
})

app.get("*",(req,res)=>{
    res.render("error",{
        pagename:"404 : Page not found",
        errormsg:"Requested page not found!!"
    })
})



app.listen(port, ()=>{
    console.log("server is running on " + port);
});