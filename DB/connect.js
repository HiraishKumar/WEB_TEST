require('dotenv').config({ path: require('path').resolve('DB', '../.env') });
const mongoose = require ('mongoose');
const connectionstring = process.env.CON_STR

const connectDB = (url) =>{
    return mongoose
    .connect(url)
    .then(()=>console.log('CONNECTION ESTABLISED WITH DB'))
    .catch((err)=>console.log(`ERROR IN ESTABLISHING CONNECTION ${err}`));
}

module.exports = connectDB


