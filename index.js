const express = require('express');
const app = express();
const env = require('dotenv');
env.config();
const port = 2000;
const cors = require('cors');
// use cors 

const corsOptions = {
  origin: '*'
};

app.use(cors(corsOptions));

// allow to send request from client 
app.use(express.json());

const cai = require('./apiRouter')
app.use('/', cai);
//allow json data
const bodyParser = require('body-parser');
app.use(bodyParser.json());
 
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
    }
)
