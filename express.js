'use strict'

    const express = require('express');
    const app = express();

    app.use(express.static(_dirname));

    app.get('/', (req, res, next) => {
        res.sendfile('home.html');
    });


    const users = [];

    app.post('/users', (req,res,next) => {
        const user = req.body;
        user.birthday = new Dare(user.birthday);
        user.id = Date.now();
        users.push(user);
        res.json(user);
    });

    app.listen(3000, err => {
        if(err){
            console.error(err);
            return;
        }
        console.log('app listening on port 3000');
    });
