// const bodyParser = require('body-parser')
const express = require('express')
const router = require('./router')
// const hbs = require('hbs')
const app = express()
const port = process.env.PORT || 3000

// app.engine('hbs',expbs({
//     partialsDir: "views/partials"
// }))
// hbs.registerPartials(__dirname + '/views/partials', function (err) {});
app.use(express.static('public'))
app.use(express.urlencoded({extended: false}))
app.set('views', 'views');

app.set('view engine', 'hbs')

app.use('/',router)
app.use('/about', router)

app.listen(port, () => console.log('Example app listening on port '+ port +'!'))