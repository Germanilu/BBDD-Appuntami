const express                       = require('express')
const app                           = express()
const db                            = require('./config/db')
const cors                          = require('cors');
const corsOptions                   = require("./libs/cors");
const port                          = process.env.PORT || 4000;


const reviewRoutes                  = require('./routes/review.routes');

require('dotenv').config();
app.use(express.json())  
app.use(cors(corsOptions));
app.use('/api',reviewRoutes);



db().then(() => {
    app.listen(port, () => {
        console.log('Server is running: ' + port);
    })
})
.catch((error) => {
    console.log("error connecting to MongoDb ", error)
})