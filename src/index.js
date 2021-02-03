const express = require('express')
const path = require('path')
const app = express()
const port = 3000
const morgan = require('morgan')
const handlebars = require('express-handlebars')
const route = require('./routes')
app.use(express.static(path.join(__dirname,'public')))

// Routes innit
route(app)

// Middleware body process
app.use(express.urlencoded({
  extended: true
}))
app.use(express.json())

// HTTP logger
app.use(morgan('combined'))

// Template engine
app.set('view engine', 'hbs');
app.engine('hbs', handlebars(
  {extname:".hbs"}
));
app.set('views', path.join(__dirname, 'resources/views'));
// End template engine


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})