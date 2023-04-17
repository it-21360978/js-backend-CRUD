const mongoose = require('mongoose');



var DATABASE;


const USER = (()=>{
    

    const DBCONNECT = ('mongodb+srv://gihan:gihan@demodb.kfheuoa.mongodb.net/test');

    if(DATABASE) return;

    mongoose.connect(DBCONNECT)
    .then((connection)=>{

        DATABASE = connection;
        console.log('database connection is established');

    }).catch((err)=>{

        console.log('database connection is not connected');

    })

})

module.exports = USER;