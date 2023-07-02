const express = require('express');
const cors = require('cors');
const database = require('./db/connection.js');
// routes
const Contact_Router = require('./routes/contact_routes.js');
const JoinUs_router = require('./routes/join_us_routes.js');
const Login_route = require('./routes/login_routes.js');


const app = express();
require('dotenv').config();

// Middlewares
app.use(cors());
app.use(express.json());



// importing routes using middle wares
app.use('/api/v1/contact', Contact_Router);
app.use('/api/v1/joinUs', JoinUs_router);
app.use('/api/v1/login', Login_route);


// Database connection
database();


app.get('/', (req, res) => {
    res.send('Hello Jai Sai ram Ji')
})

const port = 3003 || process.env.PORT;


app.listen(port, () => {
console.log(`port is running at server ${port}`)
})