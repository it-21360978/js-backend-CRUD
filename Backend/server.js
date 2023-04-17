const express = require('express');
const cors = require ('cors');
const dotenv = require('dotenv');
const  CONNECTION = require('./SRC/utilities/DBConnect');
const USER_ROUTER = require('./src/Routes/USER.ROUTES');
const USER = require('./SRC/utilities/DBConnect');


const app = express();

app.use(cors());

const PORT = process.env.PORT ||8080;

app.use(express.json());

app.get('/',(req,res,next)=>{

    res.send('server is running');
    next();

})

app.use('/user',USER_ROUTER);

app.listen(PORT, ()=>{
    
        console.log(`server is running on ${PORT}`);
        USER();
})
