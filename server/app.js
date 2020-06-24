const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyParser = require("body-parser");
const routes = require('./routes/index');
const newsRoutes = require('./routes/news');
const { urlencoded } = require('body-parser');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// https://mongoosejs.com/docs/connections.html
mongoose.connect(
    process.env.MONGO_DB_URL, 
    { useNewUrlParser: true }
)
.then( res => console.log("INFO:successfully connected to MongoDB via mongoose"))
.catch( err => console.log("ERROR: connecting to MongoDB via mongoose") );

app.use(cors());
app.options('*', cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use('/', routes);
app.use('/news', newsRoutes);


app.listen(PORT, () => console.log(`Listening on port ${PORT}`));