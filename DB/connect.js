const mongoose = require ('mongoose');

const connectDB = (url) =>{
    return mongoose
    .connect(url)
    .then(()=>console.log('CONNECTION ESTABLISED WITH DB'))
    .catch((err)=>console.log(`ERROR IN ESTABLISHING CONNECTION ${err}`));
}

module.exports = connectDB


