const newsRouter = require('./news')
const siteRouter = require('./site')
function route(app) {
  
  app.use('/news', newsRouter)
  app.use('/',siteRouter)
  

//   //Action ---> Dispatcher -----> Function handler
//   app.post('/search', (req, res) => {
//     console.log(req.body);
//     res.send('Post to backend');
//   });
}

module.exports = route;
