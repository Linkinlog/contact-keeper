const express = require('express')
const router = express.Router();
const { check, validationResult } = require('express-validator')
const User = require('../models/User')
const config = require('config')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

// @route POST /api/users
// @desc Register a fkin user
// @access Public
router.post('/', [
    check('name', 'Please enter a valid name').not().isEmpty(),
    check('email', 'Please enter a valid email').isEmail(),
    check('password', 'Please enter a password with 6 or more characters').isLength({min: 6})
], async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }
    
    const { name, email, password} = req.body;

    try {
        let user = await User.findOne({ email })

        if(user) {
            res.status(400).json({msg: 'User already exists'});
        };

            user = new User({
                name,
                email,
                password
            });
            const salt = await bcrypt.genSalt(1);

            user.password = await bcrypt.hash(password, salt);
            await user.save();

            const payload = {
                user: {
                    id: user.id
                }
            }
            jwt.sign(payload, config.get('jwtSecret'), {
                expiresIn: 360000
            }, (err, token) => {
                if (err) throw err;
                res.json({ token })
            });
        
    } catch (error) {
        console.log(error.message);
        res.status(500).send('Server error')
    }
})

module.exports = router;