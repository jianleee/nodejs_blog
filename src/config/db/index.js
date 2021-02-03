const mongoose = require('mongoose');
 async function connect(){
     try{
        await mongoose.connect('mongodb://localhost/f8_education_dev', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
          });
          console.log('connect to MongoDB successfully !!');
     }catch{
         console.log('connect fail :((');
     }
}

module.exports = { connect}