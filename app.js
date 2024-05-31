require('./DB/connect')
const express = require('express');
const app = express();
const tasks = require('./routes/tasks')
const connectDB = require('./DB/connect')
require('dotenv').config()



const port = 3000;
// middleware
app.use(express.static('./public'))
app.use(express.json());

// routes
app.use('/api/v1/tasks',tasks);

const start = async () => {
    try {
        await connectDB(process.env.CON_STR)        
        app.listen(3000, console.log(`Server is listening on port ${port}...`));
    } catch (error) {
        console.log(error)
    };
};

start();