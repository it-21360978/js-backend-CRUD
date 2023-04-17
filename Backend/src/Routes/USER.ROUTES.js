//const router = require('express').Router();
const  express  = require('express');
const router = express.Router();
const E_user = require('../models/USER');
const USER = require('../utilities/DBConnect');

router.route('/create').post((req,res)=>{

    const {name ,gender ,email}= req.body;
   // const gender=req.body.gender;
   // const email = req.body.email;

    const newEmployee = new E_user({

        name,
        gender,
        email

    })


    newEmployee.save().then(()=>{

        res.json('user added successfuly')

        }).catch((err)=>{

            res.json('error occred in adding user');

        })

})

router.route('/get/:name').get((req,res)=>{

    const{name} = req.query;

    const user =E_user.findOne(name).then((user)=>{
    

        res.json(user);

    }).catch((err)=>{

        console.log('error occured!');

    })


})


router.route('/update/:name').put((req,res)=>{

    var Name = req.query.name;
    const {name,gender ,email}= req.body;

    const updateUSER = {
        name,
        gender,
        email
    }

    const UpdateUser =  E_user.findOneAndUpdate(Name,updateUSER)
    
    .then((user)=>{

        res.json(user);

    }).catch((err)=>{

        console.log('error occured!!');
    })


})


router.route('/delete/:name').delete((req,res)=>{

    E_user.deleteOne().then((users)=>{

        res.send('deleted successfull');

    }).catch((err)=>{

        console.log('error deleted functions!');
    })

})


module.exports= router;