const express = require('express');
const PORT = 3306;
//const PORT = process.env.PORT

//require in json file in db folder
// const notetaker = require('./db/db.json')

const app = express();
const apiRoutes = require('./Routes/apiRoutes');
const htmlRoutes = require('./Routes/htmlRoutes');
// app.get('/', (req, res) => {
//     res.send(
//       'Use the API endpoint at <a href="http://localhost:3306/api">localhost:3306/api</a>'
//     );
//   });


// Parse URL encoded & JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Host public folder
app.use(express.static('public'));

app.use('/', htmlRoutes);
// Use apiRoutes
app.use('/api', apiRoutes);
// app.use('/', htmlRoutes);
///app.get("/notes", (req, res) => {
   // res.sendFile(path.join(__dirname, './public/notes.html'));
  //});


//app.use('/notes', apiRoutes);
app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});

// app.get('/api', (req, res) => {
//     res.json(notetaker)
//   })