const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');

const User = require('../models/User');

const ob = {

    //@get user
    get: async (req, res) => {
        try {
            const user = await User.findById(req.user.id).select('-password'); //получили пользователя без пароля
            res.json(user);
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server error');
        }
    },

    //@add user 
    post: async (req, res) => {

        const { name, email, password } = req.body;

        try {
            //See if user exists
            let user = await User.findOne({ email })

            if (user) {
                return res.status(400).json({ errors: [{ msg: 'User already exists' }] })
            }

            user = new User({
                name,
                email,
                password
            });

            //Encrypt password
            const salt = await bcrypt.genSalt(10);
            user.password = await bcrypt.hash(password, salt);

            await user.save();

            //Return jsonwebtoken
            const payload = {
                user: {
                    id: user.id
                }
            }

            jwt.sign(payload,
                config.get('jwtSecret'),
                { expiresIn: 360000 }, //самое нормальное время токена:3600 - это в продакшене, но когда мы разрабатываем можно поставить и побольше чтоб не мучится
                (err, token) => {
                    if (err) {
                        throw err;
                    }
                    res.json({ token })
                }
            );
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server error');
        }
    }
}

module.exports = ob;