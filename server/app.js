const express = require('express');
const cors = require('cors');
const routes = require('./routes/index');
const newsRoutes = require('./routes/news');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.options('*', cors());

app.use('/', routes);
app.use('/news', newsRoutes);


app.listen(PORT, () => console.log(`Listening on port ${PORT}`));