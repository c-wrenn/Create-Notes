const express = require('express');
//create port
const PORT = process.env.PORT || 3306

//require in json file in db folder
// const notetaker = require('./db/db.json')

const app = express();
const apiRoutes = require('./Routes/apiRoutes');
const htmlRoutes = require('./Routes/htmlRoutes');

// Parse URL encoded & JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Host public folder
app.use(express.static('public'));

app.use('/', htmlRoutes);
// Use apiRoutes
app.use('/api', apiRoutes);

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});
