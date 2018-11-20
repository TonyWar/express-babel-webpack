import express from 'express'; 
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import user from './routes/user'
import morgan from 'morgan'

mongoose.connect('mongodb://127.0.0.1:27017/jwtauth', err => {
  console.log('error', err)
});

const app = express();

const PORT = process.env.PORT || 3000;

// use body parser so we can get info from POST and/or URL parameters
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// app.set('superSecret', config.secret); // secret variable

// use morgan to log requests to the console
app.use(morgan('dev'));

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.use('/user', user);

// something for configure db
// app.get('/setup', function(req, res) {

//   // create a sample user
//   var nick = new User({ 
//     name: 'Nick Cerminara', 
//     password: 'password',
//     admin: true 
//   });

//   // save the sample user
//   nick.save(function(err) {
//     if (err) throw err;

//     console.log('User saved successfully');
//     res.json({ success: true });
//   });
// });

app.listen(PORT, () => {
  console.log('Server is running on Port', PORT);
});

// Protect api routes
/*
// API ROUTES -------------------

// get an instance of the router for api routes
var apiRoutes = express.Router(); 

// route to authenticate a user (POST http://localhost:8080/api/authenticate)
...

// route middleware to verify a token
apiRoutes.use(function(req, res, next) {

  // check header or url parameters or post parameters for token
  var token = req.body.token || req.query.token || req.headers['x-access-token'];

  // decode token
  if (token) {

    // verifies secret and checks exp
    jwt.verify(token, app.get('superSecret'), function(err, decoded) {       if (err) {
        return res.json({ success: false, message: 'Failed to authenticate token.' });       } else {
        // if everything is good, save to request for use in other routes
        req.decoded = decoded;         next();
      }
    });

  } else {

    // if there is no token
    // return an error
    return res.status(403).send({ 
        success: false, 
        message: 'No token provided.' 
    });

  }
});

// route to show a random message (GET http://localhost:8080/api/)
...

// route to return all users (GET http://localhost:8080/api/users)
...

// apply the routes to our application with the prefix /api
app.use('/api', apiRoutes);
*/