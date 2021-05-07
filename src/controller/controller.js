const axios = require('axios')
const API_KEY = '108e8e31025ca58cf201c8648db04e84'
const Weather = require('../model/Weather')
// const url = `http://api.openweathermap.org/data/2.5/weather?q=London&appid=${API_KEY}&units=metric`


exports.renderHomePage = (req, res) => {
    res.render('index')
}



exports.getWeather = (req, res) => {
    const city = req.body.city
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`

    const weather = new Weather(city)
    weather.validateUserInput()

    if(weather.errors.length){
        res.render("index",{
            error: weather.errors.toString()
        })
    }else{


    // res.send(`Your city is ${req.body.city}`)
    axios.get(url).then( (response) => {
        res.render('index',{ 
            weather : `Its currently ${response.data.main.temp} in ${response.data.name}`
        })
    }).catch((error)=>{
        console.log(error)
    })}
}


exports.renderAboutPage = (req, res) => {
    res.render('about')
}