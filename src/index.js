const express = require('express')
const path = require('path')
const app = express()
const port = 3000
const morgan = require('morgan')
const handlebars = require('express-handlebars')
app.use(express.static(path.join(__dirname,'public')))

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

app.get('/', (req, res) => {
  res.render('home');
})
app.get('/news', (req, res) => {
  res.render('news');
})
app.get('/search', (req, res) => {
  console.log(req.query.q);
  res.render('search'); 
})
app.post('/search', (req, res) => {
  console.log(req.body);
  res.send('');
})
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})