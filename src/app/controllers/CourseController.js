const Course = require('../models/Course')
class CourseController {
    // [Get] /course
    show(req, res,next){
        Course.findOne({slug: req.params.slug})
            .then(course => {
                res.render('courses/show',{course})
            })
            .catch(next)
    }
}

module.exports = new CourseController