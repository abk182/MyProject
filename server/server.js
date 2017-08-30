const express = require('express');
const path = require('path');
const db = require('./database');
const app = express();
const bodyParer = require('body-parser');
const cookieParser = require('cookie-parser');
const passport = require ('passport');
const LocalStrategy = require ('passport-local').Strategy;

passport.use(new LocalStrategy({usernameField: 'name'},
    function(name, password, done) {
        // User.findOne({ username: name }, function (err, user) {
        //     if (err) { return done(err); }
        //     if (!user) {
        //         return done(null, false, { message: 'Incorrect username.' });
        //     }
        //     if (!user.validPassword(password)) {
        //         return done(null, false, { message: 'Incorrect password.' });
        //     }
        //     return done(null, user);
        // });

        let user= {id:1, name:name, password:password}
        if (name=='admin' && password=='123'){
            return done(null, user )
        } else {
            return done(null, false, { message: 'Incorrect password.' } )
        }
    }
));

passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(function(user, done) {
        done(null, user);
});

app.use('/',express.static(path.join(__dirname,'../public')));
app.use(bodyParer.json());
app.use(bodyParer.urlencoded({extended: true}));
app.use(cookieParser());
app.use(require('express-session')({ secret: 'keyboard cat', resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());

app.post('/api/login',
    passport.authenticate('local', { successRedirect: '/login', failureRedirect: '/loginBad' }));

app.get('/login', (req,res)=>{
    console.log('/login',req.session);
});

app.get('/loginBad', (req,res)=>{
    console.log('Bad login', req.user);
});

app.get('/items', require('./routes/items'));
app.get('/selectedItem/:id', require('./routes/items'));
app.get('/cartGet/:cartID', require('./routes/cart'));
app.post('/cartAdd/:cartID', require('./routes/cart'));
app.patch('/cartDelete/:cartID', require('./routes/cart'));
app.post('/order/:id', require('./routes/order.js'));
app.post('/saveItemChanges/:id', require('./routes/items.js'));
app.post('/addImg', require('./routes/items.js'));
app.post('/addNewItem', require('./routes/items.js'));
app.delete('/itemdelete/:id', require('./routes/items'));

app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/index.html'))
    });

db.connect(()=>{
    app.listen(3000, console.log('Start 3000'))
});
