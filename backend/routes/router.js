const express = require('express');

const router = new express.Router();
const Products = require('../models/productSchema');
const user = require('../models/userSchema');
const bcrypt = require('bcryptjs');

// Get Products Data API
router.get('/getProducts', async (req, res) => {
    try {
        const productsData = await Products.find();
        // console.log('getProducts:', productsData);
        res.status(201).json(productsData);
    } catch (error) {
        console.log('error:', error.message);
    }
})

// Get individual data
router.get('/getProductData/:id', async (req, res) => {
    try {
        const { id } = req.params;
        // console.log(id);
        const individualData = await Products.findOne({ id: id });
        // console.log('individualData: ', individualData);
        res.status(201).json(individualData);
    } catch (error) {
        res.status(400).json(individualData);
        console.log('error:', error.message);
    }
});

// To register the user
router.post('/register', async (req, res) => {
    console.log(req.body);
    const { fname, email, mobile, password, cpassword } = req.body;

    if (!fname || !email || !mobile || !password || !cpassword) {
        res.status(422).json({ error: "Fill all the data" });
        console.log("No Data Available");
    }
    else {
        try {
            const preUser = await user.findOne({ email: email });
            console.log(preUser);
            if (preUser) {
                console.log("This user already exists");
                res.status(422).json({ error: "This user already exists" });
            }
            else if (password !== cpassword) {
                console.log("pwd and cpwd not match");
                res.status(422).json({ error: "password and cpassword not match" });
            }
            else {
                console.log("Went into else");
                const finalUser = new user({ fname, email, mobile, password, cpassword });
                const storeData = await finalUser.save();
                console.log(storeData);
                res.status(201).json(storeData);
            }
        } catch (error) {

        }
    }
})

// Api to login
router.post('/login', async(req, res) => {
    const {email, password} = req.body;

    if(!email || !password) {
        res.status(400).json({error: 'Fill all the data'});
    }

    try {
        const userLogin = await user.findOne({email: email});
        if(userLogin) {
            const isMatch = await bcrypt.compare(password, userLogin.password);

            if(!isMatch) {
                res.status(400).json({error: "Invalid password"});
            }
            else {
                res.status(201).json(userLogin);
            }
        }
        else {
            res.status(400).json({error: "Invalid email"});
        }

    } catch (error) {
        res.status(400).json({error: "Invalid details"});
    }
    
})


module.exports = router;