const Course = require('../models/Course')
const { multipleMongooseToObject} = require('../../ultil/mongoose')
class SiteController {
    // [Get] /home
    home(req,res,next){

        Course.find({})
            .then(courses =>{
                res.render('home',{
                    courses: multipleMongooseToObject(courses)
                })
            })
            .catch(error => next(error))
    }
    // [Get] /search
    search(req, res){
        res.render('search')
    }
}

module.exports = new SiteController